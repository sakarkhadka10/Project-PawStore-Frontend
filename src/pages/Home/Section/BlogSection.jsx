import React from "react";
import BlogCards from "../../../component/Main/UI/BlogCards";

const BlogSection = () => {
  const blogContent = [
    {
      title: "Are you having trouble finding the right dog?",
      image: "/blog/blog1.jpg",
    },
    {
      title: "Is your dog aggresive towards your kids?",
      image: "/blog/blog2.jpg",
    },
    {
      title: "Looking for someone to train your dog?",
      image: "/blog/blog3.jpg",
    },
    {
      title: "Choose the most stylist and durable products for your dog.",
      image: "/blog/blog4.jpg",
    },
  ];

  return (
    <section className="max-w-[1166px]  relative left-1/2 -translate-x-1/2">
      <div className="grid grid-cols-1 gap-8 md:gap-10 place-items-center text-center">
        {/* Content Side */}
        <div>
          <h1 className="text-[36px] font-bold ">Blog Section</h1>
          <p className="text-[18px] font-normal leading-tight">
            Desctiprion of blog
          </p>
        </div>

        {/* Cards Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[36px] ">
          {blogContent.map((item, index) => (
            <BlogCards key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
