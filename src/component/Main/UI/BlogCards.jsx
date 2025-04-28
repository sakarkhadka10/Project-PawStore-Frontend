import React from "react";

const BlogCards = ({ image, title }) => {
  return (
    <div className="w-[267px] h-[375px] rounded-2xl shadow-2xl">
      <div className="w-[266.72px] h-[250px] rounded-2xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <p className="text-md font-medium">{title}</p>
      </div>
    </div>
  );
};

export default BlogCards;
