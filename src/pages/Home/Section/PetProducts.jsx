import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAccessories } from "../../../services/api";
import { FaSpinner, FaArrowRight } from "react-icons/fa6";
import ProductCard from "../../../component/Main/UI/ProductCard";

const PetProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchAccessories();
        // Limit to 6 products for the homepage display
        setProducts(data.slice(0, 6));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching accessories:", err);
        setError(err.toString());
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <section className="py-16 px-4 my-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-3">
            Pet <span className="text-amber-600">Products</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            All products are designed for ease of use and durability, as well as
            looking good. You can choose your own colours to make your item
            unique.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Loading and Error States */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="animate-spin text-amber-600 text-4xl" />
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-500">
              Error loading products. Please try again later.
            </p>
          </div>
        ) : (
          <>
            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-8">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            {/* View All Button */}
            <Link
              to="/accessories"
              className="inline-flex items-center px-5 py-2 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors duration-300 mt-4"
            >
              View All Products
              <FaArrowRight className="ml-2" size={12} />
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default PetProducts;
