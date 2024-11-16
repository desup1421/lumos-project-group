import React from "react";

const Dashboard = () => {
  return (
    <>
      {/* Dashboard Section */}
      <section>
        <h1 className="text-2xl font-bold dark:text-white">Dashboard</h1>
        <p className="dark:text-neutral-400 max-w-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          consequuntur, molestiae recusandae in, labore quod animi nihil
          praesentium delectus nisi doloremque, debitis laudantium voluptatum
          temporibus voluptate earum maxime alias. Molestiae?
        </p>
      </section>

      {/* Section Card */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {/* Card 1 - Messages */}
        <div className="flex flex-col justify-between bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Messages
            </h3>
            <p className="text-8xl text-accent">50</p>
            <p className="mt-1 text-gray-500 dark:text-neutral-400">
              Here is the information about the message from the website
              visitors.
            </p>
          </div>
          <div className="p-4 md:p-5 flex">
            <img
              className="w-14 h-14 rounded-full border-gray-500 border"
              src="https://i.pravatar.cc/100"
              alt=""
            />
            <img
              className="w-14 h-14 rounded-full border-gray-500 border -ml-5"
              src="https://i.pravatar.cc/200"
              alt=""
            />
            <img
              className="w-14 h-14 rounded-full border-gray-500 border -ml-5"
              src="https://i.pravatar.cc/300"
              alt=""
            />
            <div className="w-14 h-14 rounded-full bg-secondary border-gray-500 border flex items-center justify-center -ml-5">
              <p className="font-bold text-xl text-accent">+5</p>
            </div>
          </div>
        </div>

        {/* Card 2 - Articles */}
        <div className="flex flex-col justify-between bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Articles
            </h3>
            <p className="text-8xl text-accent">10</p>
            <p className="mt-1 text-gray-500 dark:text-neutral-400">
              Here is the information about the message from the website
              visitors.
            </p>
          </div>
          <div className="p-4 md:p-5 flex">
            <img
              className="w-14 h-14 rounded-full border-gray-500 border"
              src="https://i.pravatar.cc/150"
              alt=""
            />
            <img
              className="w-14 h-14 rounded-full border-gray-500 border -ml-5"
              src="https://i.pravatar.cc/160"
              alt=""
            />
            <img
              className="w-14 h-14 rounded-full border-gray-500 border -ml-5"
              src="https://i.pravatar.cc/1700"
              alt=""
            />
            <div className="w-14 h-14 rounded-full bg-secondary border-gray-500 border flex items-center justify-center -ml-5">
              <p className="font-bold text-xl text-accent">+5</p>
            </div>
          </div>
        </div>
        
        {/* Card 3 - Testimonials */}
        <div className="flex flex-col justify-between bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Testimonial
            </h3>
            <p className="text-8xl text-accent">20</p>
            <p className="mt-1 text-gray-500 dark:text-neutral-400">
              Here is the information about the message from the website
              visitors.
            </p>
          </div>
          <div className="p-4 md:p-5 flex">
            <img
              className="w-14 h-14 rounded-full border-gray-500 border"
              src="https://i.pravatar.cc/110"
              alt=""
            />
            <img
              className="w-14 h-14 rounded-full border-gray-500 border -ml-5"
              src="https://i.pravatar.cc/120"
              alt=""
            />
            <img
              className="w-14 h-14 rounded-full border-gray-500 border -ml-5"
              src="https://i.pravatar.cc/130"
              alt=""
            />
            <div className="w-14 h-14 rounded-full bg-secondary border-gray-500 border flex items-center justify-center -ml-5">
              <p className="font-bold text-xl text-accent">+5</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Section */}
      <section className="mt-5">
        <h2 className="text-xl font-bold dark:text-white">Recent Articles</h2>
      </section>
    </>
  );
};

export default Dashboard;
