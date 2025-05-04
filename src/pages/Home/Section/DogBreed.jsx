import React, { useState, useEffect } from "react";
import { fetchBreeds } from "../../../services/api";
import { FaSpinner } from "react-icons/fa6";

const DogBreed = () => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBreeds = async () => {
      try {
        setLoading(true);
        const data = await fetchBreeds();
        // Limit to 7 breeds for the homepage display
        setBreeds(data.slice(0, 6));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching breeds:", err);
        setError(err.toString());
        setLoading(false);
      }
    };

    getBreeds();
  }, []);
  return (
    <header className="mt-24 max-w-[1166px] relative left-1/2 -translate-x-1/2 flex justify-center items-center text-center">
      <main className="w-full">
        {/* Text Container */}
        <h3 className="text-3xl md:text-4xl font-bold mb-3">
          <span className="text-amber-600">Dog </span>Breeds
        </h3>
        <p className="text-lg lg:text-xl mt-2">
          Find yourself a perfect friend from a wide variety of choices.
        </p>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="animate-spin text-amber-600 text-4xl" />
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-500">
              Error loading breeds. Please try again later.
            </p>
          </div>
        ) : (
          /* Image Container */
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-10 place-items-center gap-5 lg:gap-9 ">
            {breeds.map((breed) => (
              <div
                key={breed._id}
                className="flex flex-col justify-center items-center max-w-[136px] lg:gap-2 hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                <div className="rounded-full overflow-hidden w-[136px] h-[137px]">
                  <img
                    src={breed.image}
                    alt={breed.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-sm font-medium lg:text-md">{breed.name}</h3>
              </div>
            ))}
          </div>
        )}
      </main>
    </header>
  );
};

export default DogBreed;
