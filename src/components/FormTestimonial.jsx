import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import apiService from "../utils/api/api";
import { ArticleContext } from "../utils/context/ArticleContext";

const FormContainers = () => {
  const { updateArticleRefresh } = useContext(ArticleContext);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/").pop();
  // Get the id from the URL params, add or edit
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    date: "",
    title: "",
    image: null,
  });

  console.log("id", id);
  console.log("path", path);
  useEffect(() => {
    if (id) {
      setIsLoading(true);
      apiService
        .getTestimonial()
        .then((response) => {
          console.log("Response.data:", response.data);
          console.log("Response.data.data:", response.data.data);
          setFormData(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [id]);

  // Handle form change, logic for file upload
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: files ? files[0] : value,
    }));
  };

  // Handle add form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    console.log("data: ", data);
    apiService
      .addTestimonial(data)
      .then((response) => {
        console.log(response.data);
        updateArticleRefresh();
        navigate("/testimonials/add");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Handle edit form submission
  const handleEdit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData();

    // Loop through formData and append each key-value pair to the FormData object
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    console.log("data: ", data);
    console.log("formdata", formData);
    console.log("formdataid", formData[0].id);
    apiService
      .editTestimonial(formData.id, data)
      .then((response) => {
        console.log(response.data);
        console.log("formdataid", formData.id);
        updateArticleRefresh();
        navigate(`/testimonials/edit/${formData.id}`);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-lvh justify-center items-center">
      <div className="w-full max-w-lg mb-3">
        <button onClick={() => navigate(-1)} className="py-1 px-2 rounded-md">
          <i className="bx bx-arrow-back text-2xl"></i>
        </button>
      </div>

      <div className="relative flex w-full max-w-lg flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
        <h1 className="text-center text-primary dark:text-white text-2xl font-bold uppercase">
          {path === "add" ? "Add Testimonial" : "Edit Testimonial"}
        </h1>
        <form
          onSubmit={id ? handleEdit : handleSubmit}
          className="p-1 py-10 md:p-10 flex flex-col justify-center"
        >
          <div className="space-y-3">
            <div className="relative">
              <input
                type="text"
                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent outline-accent rounded-lg text-sm"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <textarea
                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent outline-accent rounded-lg text-sm"
                placeholder="Message"
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <input
                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent outline-accent rounded-lg text-sm"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <input
                type="text"
                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent outline-accent rounded-lg text-sm"
                placeholder="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <label htmlFor="image" className="sr-only">
                Choose file
              </label>
              <input
                className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm"
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            className="bg-accent p-2 rounded-lg text-white w-32 mx-auto mt-5"
            type="submit"
            disabled={isLoading}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormContainers;
