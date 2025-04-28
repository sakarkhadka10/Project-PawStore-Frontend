import React from "react";

const NewsLetter = () => {
  return (
    <section className="my-20 md:my-32 max-w-[1166px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full bg-[#FFF0D9] rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Dog Image */}
          <div className="w-full md:w-1/2 h-[250px] md:h-[350px]">
            <img
              src="/img/dog-contact.png"
              alt="Dog Contact"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 p-8 md:p-12 text-center md:text-left">
            <h1 className="mb-4">Get Pawsome News!</h1>
            <p className="text-base md:text-lg mb-6">
              Exclusive training tips, tricks, product deals and more.
            </p>
            <div className="flex flex-col items-center md:items-start gap-3">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="px-4 py-3 w-full rounded-lg flex-grow focus:outline-none focus:ring-2 bg-white focus:ring-amber-500"
              />
              <button className="bg-amber-600 text-white font-medium px-6 py-3 w-fit rounded-lg hover:bg-amber-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
