import React from "react";

const Articles = () => {
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
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-neutral-200">
                    Guide lengkap mencuri mangga tetangga tanpa ketahuan
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                    2024-12-12
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">
                    Dede Supriatna
                  </td>
                  <td className="px-6 py-4 flex gap-1 justify-evenly flex-wrap text-end text-sm font-medium">
                    {/* Button Info */}
                    <button
                      type="button"
                      className="p-2 rounded-lg border border-blue-500"
                    >
                      <i className="bx bx-info-circle text-blue-500"></i>
                    </button>

                    {/* Button Edit */}
                    <button
                      type="button"
                      className="p-2 rounded-lg border border-orange-500"
                    >
                      <i className="bx bx-pencil text-orange-500"></i>
                    </button>

                    {/* Button Delete */}
                    <button
                      type="button"
                      className="p-2 rounded-lg border border-red-500"
                    >
                      <i className="bx bx-trash text-red-500"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-neutral-200">
                    News! The new iPhone 14 Pro is coming soon
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                    2024-12-12
                  </td>
                  <td className="px-6 py-4-800 dark:text-neutral-200">
                    Dede Supriatna
                  </td>
                  <td className="px-6 py-4 flex gap-1 justify-evenly flex-wrap text-end text-sm font-medium">
                    {/* Button Info */}
                    <button
                      type="button"
                      className="p-2 rounded-lg border border-blue-500"
                    >
                      <i className="bx bx-info-circle text-blue-500"></i>
                    </button>

                    {/* Button Edit */}
                    <button
                      type="button"
                      className="p-2 rounded-lg border border-orange-500"
                    >
                      <i className="bx bx-pencil text-orange-500"></i>
                    </button>

                    {/* Button Delete */}
                    <button
                      type="button"
                      className="p-2 rounded-lg border border-red-500"
                    >
                      <i className="bx bx-trash text-red-500"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-neutral-200">
                    React is a poweful JavaScript library for building user
                    interfaces.
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                    2024-12-12
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">
                    Dede Supriatna
                  </td>
                  <td className="px-6 py-4 flex gap-1 justify-evenly flex-wrap text-end text-sm font-medium">
                    {/* Button Info */}
                    <button
                      type="button"
                      className="p-2 rounded-lg border border-blue-500"
                    >
                      <i className="bx bx-info-circle text-blue-500"></i>
                    </button>

                    {/* Button Edit */}
                    <button
                      type="button"
                      className="p-2 rounded-lg border border-orange-500"
                    >
                      <i className="bx bx-pencil text-orange-500"></i>
                    </button>

                    {/* Button Delete */}
                    <button
                      type="button"
                      className="p-2 rounded-lg border border-red-500"
                    >
                      <i className="bx bx-trash text-red-500"></i>
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

export default Articles;
