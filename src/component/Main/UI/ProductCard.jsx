import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, image, price, category } = product;

  // Format category name for display
  const formatCategory = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <Link to={`/accessories`} className="block">
      <div className="w-full aspect-square rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative group">
        {/* Image with hover effect */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Category badge */}
        <div className="absolute top-1 left-1">
          <span className="bg-amber-600 text-white text-xs px-1.5 py-0.5 rounded-full capitalize">
            {formatCategory(category)}
          </span>
        </div>

        {/* Price tag */}
        <div className="absolute top-1 right-1">
          <span className="bg-white text-amber-600 text-xs font-bold px-1.5 py-0.5 rounded-lg shadow-sm">
            NPR {price.toFixed(2)}
          </span>
        </div>

        {/* Product name - appears at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-1.5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xs font-medium text-center truncate">{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
