import React from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

/**
 * Component params.
 * @param {handleLogout} function - function for logout
 * @returns {React.Component} - react component for sidebar
 */

const Sidebar = ({ handleLogout }) => {
  return (
    <aside>
      {/* Navigation Toggle */}
      <div className="fixed top-2 right-5 lg:hidden">
        <button
          type="button"
          className="py-1 px-2 inline-flex justify-center items-center gap-x-2 text-start bg-white dark:bg-neutral-800 border group border-accent text-white text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-accent/90 focus:outline-none focus:bg-aotline dark:bg-none dark:text-neutral-800 dark:hover:bg-accent "
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="side-bar"
          aria-label="Toggle navigation"
          data-hs-overlay="#side-bar"
        >
          <i className="bx bx-menu text-3xl text-accent group-hover:text-white"></i>
        </button>
      </div>
      {/* End Navigation Toggle */}

      {/* Sidebar */}
      <div
        id="side-bar"
        className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-700"
        role="dialog"
        tabIndex={-1}
        aria-label="Sidebar"
      >
        {/* Logo */}
        <div className="px-6">
          <Link
            className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
            to="/"
            aria-label="Brand"
          >
            <div className="flex items-center gap-x-3">
              <img src={Logo} alt="Logo" />
              <span> Logoipsum</span>
            </div>
          </Link>
        </div>
        {/* End of Logo */}

        {/* Nav */}
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open=""
        >
          <ul className="space-y-1.5">
            {/* Dashboard */}
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white"
                to="/"
              >
                <i className="bx bx-home text-lg"></i>
                Dashboard
              </Link>
            </li>

            {/* About Us */}
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                to="/about"
              >
                <i className="bx bx-building-house text-lg"></i>
                About Us
              </Link>
            </li>

            {/* Teams */}
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                to="/teams"
              >
                <i className="bx bx-group text-lg"></i>
                Teams
              </Link>
            </li>

            {/* Expertice */}
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                to="/expertice"
              >
                <i className="bx bx-badge-check text-lg"></i>
                Expertice
              </Link>
            </li>

            {/* Portfolio */}
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                to="/portfolio"
              >
                <i className="bx bx-book-content text-lg"></i>
                Portfolio
              </Link>
            </li>

            {/* Testimonial */}
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                to="/testimonials"
              >
                <i className="bx bx-user-voice text-lg"></i>
                Testimonial
              </Link>
            </li>

            {/* What we do */}
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                to="/what-we-do"
              >
                <i className="bx bx-task text-lg"></i>
                What we do
              </Link>
            </li>

            {/* Article */}
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                to="/articles"
              >
                <i className="bx bx-news text-lg"></i>
                Article
              </Link>
            </li>

            {/* Message */}
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                to="/messages"
              >
                <i className="bx bx-chat text-lg"></i>
                Messages
              </Link>
            </li>
          </ul>
        </nav>
        {/* End of Nav */}

        {/* Button Logout */}
        <div className="flex">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white w-40 mt-2 mx-auto  rounded-lg py-1 px-2 "
          >
            Logout
          </button>
        </div>
      </div>
      {/* End Sidebar */}
    </aside>
  );
};

export default Sidebar;
