import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../utils/api/api";
import { ArticleContext } from "../utils/context/ArticleContext";

const Testimonial = () => {
  const { articleRefresh } = useContext(ArticleContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [testimonials, setTestimonials] = useState([]);

  // Fetch testimonials data from the API using useEffect
  useEffect(() => {
    setIsLoading(true);
    apiService
      .getTestimonial()
      .then((res) => {
        console.log(res.data.data);
        setTestimonials(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [articleRefresh]);

  // if Loading
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Function to handle click on the "Add Testimonial" button
  const handleClickAdd = () => {
    navigate("/testimonials/add");
  };

  // Function to handle click on the "Edit Testimonial" button
  const handleClickEdit = (id) => {
    navigate(`/testimonials/edit/${id}`);
    console.log("id", id);
  };

  // Function to handle click on the "Delete Testimonial" button
  const handleClickDelete = (id) => {
    apiService
      .deleteTestimonial(id)
      .then((res) => {
        console.log(res.data);
        // Remove the deleted testimonial from the state
        const updatedTestimonials = testimonials.filter(
          (testimonial) => testimonial.id !== id
        );
        setTestimonials(updatedTestimonials);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg overflow-x-auto dark:border-neutral-700">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <caption className="py-2 text-start text-sm text-gray-600 dark:text-neutral-500">
                Testimonial List
              </caption>
              <thead className="bg-gray-50 dark:bg-neutral-700">
                {/* Button row */}
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500 border-b-2"
                    colSpan="4"
                  >
                    {/* Button Add */}
                    <button
                      onClick={handleClickAdd}
                      className="py-1 px-2 bg-green-500 text-white rounded-sm float-right"
                    >
                      <i className="bx bx-add-to-queue mr-1"></i>
                      Add new Testimonial
                    </button>
                  </th>
                </tr>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Message
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {testimonials.map((testimonial, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-neutral-200">
                      {testimonial.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">
                      {testimonial.message}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {testimonial.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">
                      {testimonial.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">
                      <img
                        src={testimonial.image}
                        alt={testimonial.title}
                        className="w-16 h-16 rounded-lg"
                      />
                    </td>
                    <td className="px-6 py-4 flex gap-1 justify-evenly flex-wrap text-end text-sm font-medium">
                      {/* Button Info */}
                      <button
                        type="button"
                        className="p-2 rounded-lg border border-blue-500"
                        onClick={() =>
                          navigate(`/testimonials/${testimonial.id}`)
                        }
                        disabled
                      >
                        <i className="bx bx-info-circle text-blue-500"></i>
                      </button>

                      {/* Button Edit */}
                      <button
                        type="button"
                        className="p-2 rounded-lg border border-orange-500"
                        onClick={() => handleClickEdit(testimonial.id)}
                      >
                        <i className="bx bx-pencil text-orange-500"></i>
                      </button>

                      {/* Button Delete */}
                      <button
                        type="button"
                        className="p-2 rounded-lg border border-red-500"
                        onClick={() => handleClickDelete(testimonial.id)}
                      >
                        <i className="bx bx-trash text-red-500"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
