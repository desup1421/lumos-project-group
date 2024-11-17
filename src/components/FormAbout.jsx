import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation  } from "react-router-dom";
import apiService from "../utils/api/api";
import { ArticleContext } from "../utils/context/ArticleContext";

const FormAbout = () => {
  const { updateArticleRefresh } = useContext(ArticleContext);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/").pop();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    image: null,
  });

  useEffect(() => {
    if (path === 'edit') {
      setIsLoading(true);
      apiService
        .getAbout()
        .then((res) => {
          console.log(res.data.data);
          setFormData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [ path ]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prepValues) => ({
      ...prepValues,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData();
    for (const key in formData) {
        data.append(key, formData[key]);
    }
    apiService
      .addAbout(data)
      .then((res) => {
        console.log(res.data);
        updateArticleRefresh();
        navigate("/about");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData();
    for (const key in formData) {   
        data.append(key, formData[key]);
    }
    apiService
      .editAbout(data)
      .then((res) => {
        console.log(res.data);
        updateArticleRefresh();
        navigate("/about");
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
    // Container
    <div className="flex flex-col min-h-lvh justify-center items-center">
      {/* Button Container */}
      <div className="w-full max-w-lg mb-3">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="py-1 px-2 rounded-md">
          <i className="bx bx-arrow-back text-2xl dark:text-accent"></i>
        </button>
      </div>

      {/* Card */}
      <div className="relative flex w-full max-w-lg flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
        <h1 className="text-center text-primary dark:text-white text-2xl font-bold uppercase">
          {path === "add" ? "Add About Section" : "Edit About Section"}
        </h1>
        {/* Form */}
        <form
          onSubmit={path === 'edit' ? handleEdit : handleSubmit}
          className="p-1 py-10 md:p-10 flex flex-col justify-center"
        >
          <div className="space-y-3">
            {/* Title Input */}
            <div className="relative">
              <input
                type="text"
                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent outline-accent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                <i className="bx bxs-user-badge text-neutral-500"></i>
              </div>
            </div>

            {/* Content Input */}
            <div className="relative">
              <textarea
                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent outline-accent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 "
                placeholder="Description"
                rows="4"
                name="desc"
                value={formData.desc}
                onChange={handleChange}
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                <i className="bx bxs-user-badge text-neutral-500"></i>
              </div>
            </div>

            {/* Image Input */}
            <div className="relative">
              <label htmlFor="image" className="sr-only">
                Choose file
              </label>
              <input
                className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4 dark:file:bg-neutral-700 dark:file:text-neutral-400"
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            className="bg-accent p-2 rounded-lg text-white w-32 mx-auto mt-5 disabled:bg-accent/50 disabled:cursor-wait"
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

export default FormAbout;

