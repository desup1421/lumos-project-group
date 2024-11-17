import React, { useState, useEffect, useContext } from "react";
import apiService from "../utils/api/api";
import { ArticleContext } from "../utils/context/ArticleContext";

const Messages = () => {
  const { articleRefresh } = useContext(ArticleContext);
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    setIsLoading(true);
    apiService
      .getMessage("page=1&limit=5")
      .then((res) => {
        console.log(res.data.data);
        setMessages(res.data.data);
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
                Messages
              </caption>
              <thead className="bg-gray-50 dark:bg-neutral-700">
                {/* Table Header */}
                <tr>
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
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Message
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {messages.map((message, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-neutral-200">
                      {new Date(message.date).toLocaleString('id-ID', {
                        day:'2-digit',
                        month:'2-digit',
                        year:'2-digit',
                      })}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-neutral-200">
                      {message.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {message.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">
                      {message.phone}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">
                      {message.message}
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

export default Messages;
