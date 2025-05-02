import React, { useState, useEffect } from "react";
import {
  FaCartShopping,
  FaStar,
  FaRegStar,
  FaFilter,
  FaSpinner,
} from "react-icons/fa6";
import { fetchAccessories } from "../../services/api";

const AccessoriesPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    { id: "all", name: "All Products" },
    { id: "food", name: "Food & Treats" },
    { id: "toys", name: "Toys" },
    { id: "beds", name: "Beds & Furniture" },
    { id: "collars", name: "Collars & Leashes" },
    { id: "grooming", name: "Grooming" },
  ];

  useEffect(() => {
    const getAccessories = async () => {
      try {
        setLoading(true);
        const data = await fetchAccessories(activeCategory);
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.toString());
        setLoading(false);
      }
    };

    getAccessories();
  }, [activeCategory]);

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-amber-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStar key={i} className="text-amber-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-amber-400" />);
      }
    }

    return stars;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Pet Accessories</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover premium quality accessories for your furry friends. From
          comfortable beds to interactive toys, we have everything to keep your
          pets happy and healthy.
        </p>
      </section>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Shop by Category</h2>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg"
          >
            <FaFilter /> Filters
          </button>
        </div>

        <div
          className={`md:flex flex-wrap gap-3 ${showFilters ? "block" : "hidden md:flex"}`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full mb-2 md:mb-0 transition-colors ${
                activeCategory === category.id
                  ? "bg-amber-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Loading and Error States */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <FaSpinner className="animate-spin text-amber-600 text-4xl" />
        </div>
      ) : error ? (
        <div className="text-center py-20">
          <p className="text-red-500 text-xl">{error}</p>
          <p className="mt-4">Please try again later.</p>
        </div>
      ) : (
        <>
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  {product.bestseller && (
                    <span className="absolute top-2 right-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">
                      BESTSELLER
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {renderStars(product.rating)}
                    <span className="ml-1 text-sm text-gray-500">
                      ({product.rating})
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">${product.price}</span>
                    <button className="bg-amber-600 text-white p-2 rounded-full hover:bg-amber-700 transition-colors">
                      <FaCartShopping />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fallback for no products */}
          {products.length === 0 && !loading && !error && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">
                No products found in this category.
              </p>
            </div>
          )}
        </>
      )}

      {/* Promotion Banner */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-8 text-white text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Special Offer!</h2>
        <p className="text-xl mb-6">
          Get 15% off on all accessories when you buy any two items. Use code:
          PAWSOME15
        </p>
        <button className="bg-white text-amber-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
          Shop Now
        </button>
      </section>
    </div>
  );
};

export default AccessoriesPage;
