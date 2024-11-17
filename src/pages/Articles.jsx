import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../utils/api/api";
import { ArticleContext } from "../utils/context/ArticleContext";

const Articles = () => {
  const { articleRefresh } = useContext(ArticleContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const handleClickAdd = () => {
    navigate("/articles/add");
  };

  const handleClickEdit = (slug) => {
    navigate(`/articles/edit/${slug}`);
  }; 

  const handleClickDelete = (id) => {
    apiService
      .deleteArticle(id)
      .then((res) => {
        console.log(res.data);
        const updatedArticles = articles.filter((article) => article.id !== id);
        setArticles(updatedArticles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    apiService
      .getArticle("page=1&limit=5")
      .then((res) => {
        console.log(res.data.data);
        setArticles(res.data.data);
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
                Article List
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
                      Add new article
                    </button>
                  </th>
                </tr>
                {/* Table Header */}
                <tr>
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
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Writter
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
                {articles.map((article, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-neutral-200">
                      {article.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {article.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">
                      {article.writer}
                    </td>
                    <td className="px-6 py-4 flex gap-1 justify-evenly flex-wrap text-end text-sm font-medium">
                      {/* Button Info */}
                      <a
                        className="p-2 rounded-lg border border-blue-500"
                        href = {`https://lumos-react-group-28.vercel.app/blog/${article.slug}`}
                      >
                        <i className="bx bx-info-circle text-blue-500"></i>
                      </a>

                      {/* Button Edit */}
                      <button
                        type="button"
                        className="p-2 rounded-lg border border-orange-500"
                        onClick={() => handleClickEdit(article.slug)}
                      >
                        <i className="bx bx-pencil text-orange-500"></i>
                      </button>

                      {/* Button Delete */}
                      <button
                        type="button"
                        className="p-2 rounded-lg border border-red-500"
                        onClick={() => handleClickDelete(article.id)}
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

export default Articles;
