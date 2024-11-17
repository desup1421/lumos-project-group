import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../utils/api/api";
import { ArticleContext } from "../utils/context/ArticleContext";

const AboutUs = () => {
  const { articleRefresh } = useContext(ArticleContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [about, setAbout] = useState([]);

  const handleClickAdd = () => {
    navigate("/about/add");
  };

  const handleClickEdit = () => {
    navigate(`/about/edit`);
  }; 

  useEffect(() => {
    setIsLoading(true);
    apiService
      .getAbout()
      .then((res) => {
        console.log(res.data.data);
        setAbout(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [articleRefresh]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg overflow-x-auto dark:border-neutral-700">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <caption className="py-2 text-start text-sm text-gray-600 dark:text-neutral-500">
                About Us
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
                      Add new section
                    </button>
                  </th>
                </tr>
                {/* Table Header */}
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Image
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
                    Description
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
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-neutral-200">
                      <img className="rounded-lg max-w-28 w-full object-cover" src={about.imageUrl} alt="" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {about.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">
                      {about.desc}
                    </td>
                    <td className="px-6 py-4 flex gap-1 justify-evenly flex-wrap text-end text-sm font-medium">
                      {/* Button Edit */}
                      <button
                        type="button"
                        className="p-2 rounded-lg border border-orange-500"
                        onClick={() => handleClickEdit('slug')}
                      >
                        <i className="bx bx-pencil text-orange-500"></i>
                      </button>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
