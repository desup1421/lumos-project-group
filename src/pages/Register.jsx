import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    // Container
    <div className="flex min-h-lvh justify-center items-center">
      {/* Card */}
      <div className="relative flex w-full max-w-lg flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
        <h1 className="text-center text-primary text-2xl font-bold">Register</h1>
        {/* Form */}
        <form className="p-10 flex flex-col justify-center">
          <div className="space-y-3">
						{/* Name input */}
            <div className="relative">
              <input
                type="text"
                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent outline-accent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Name"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
								<i className='bx bx-user text-neutral-500'></i>
              </div>
            </div>

						{/* Role Input */}
            <div className="relative">
              <input
                type="text"
                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent outline-accent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Role"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
								<i className='bx bx-crown text-neutral-500'></i>
              </div>
            </div>

						{/* Username Input */}
            <div className="relative">
              <input
                type="text"
                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent outline-accent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Username"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
								<i className='bx bxs-user-badge text-neutral-500'></i>
              </div>
            </div>

						{/* Password Input */}
            <div className="relative">
              <input
                type="password"
                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent outline-accent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Password"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
								<i className='bx bxs-key text-neutral-500'></i>
              </div>
            </div>
          </div>
          <button className="bg-accent p-2 rounded-lg text-white w-32 mx-auto mt-5">
            Register
          </button>
          <p className="text-sm text-gray-500 text-center absolute bottom-3 left-0 w-full">
            Have an account?
            <Link to="/login" className="text-accent font-semibol ml-1">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
