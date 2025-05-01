import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const BreedsPage = () => {
  const dogBreeds = [
    {
      id: 1,
      name: "German Shepherd",
      image: "/dog-breed/GermanShepard.jpg",
      description:
        "Intelligent, loyal and versatile working dogs known for their courage and protective nature.",
      traits: ["Intelligent", "Loyal", "Protective", "Versatile", "Confident"],
    },
    {
      id: 2,
      name: "Golden Retriever",
      image: "/dog-breed/GoldenRetriver.jpg",
      description:
        "Friendly, intelligent and devoted dogs that excel as family companions and service animals.",
      traits: ["Friendly", "Intelligent", "Devoted", "Gentle", "Confident"],
    },
    {
      id: 3,
      name: "Japanese Spitz",
      image: "/dog-breed/JapaneseSpitz.jpg",
      description:
        "Small, fluffy companions with big personalities, known for their alertness and loyalty.",
      traits: ["Alert", "Loyal", "Playful", "Intelligent", "Affectionate"],
    },
    {
      id: 4,
      name: "Labrador Retriever",
      image: "/dog-breed/Labrador.jpg",
      description:
        "Outgoing, even-tempered and friendly dogs that make excellent family pets and working dogs.",
      traits: ["Friendly", "Active", "Outgoing", "Even-tempered", "Gentle"],
    },
    {
      id: 5,
      name: "Pitbull",
      image: "/dog-breed/pitbull.jpg",
      description:
        "Strong, determined dogs with a loving disposition toward their families and a zest for life.",
      traits: [
        "Loyal",
        "Determined",
        "Confident",
        "Intelligent",
        "Affectionate",
      ],
    },
    {
      id: 6,
      name: "Pug",
      image: "/dog-breed/pug.jpg",
      description:
        "Charming, mischievous companions with distinctive wrinkled faces and playful personalities.",
      traits: ["Charming", "Mischievous", "Loving", "Stubborn", "Social"],
    },
    {
      id: 7,
      name: "Siberian Husky",
      image: "/dog-breed/SiberianHusky.jpg",
      description:
        "Energetic, outgoing working dogs with striking features and an independent spirit.",
      traits: [
        "Energetic",
        "Outgoing",
        "Independent",
        "Friendly",
        "Mischievous",
      ],
    },
    {
      id: 8,
      name: "Corgi",
      image: "/img/hero-dog.png",
      description:
        "Short-legged herding dogs with big personalities, known for their intelligence and playfulness.",
      traits: ["Intelligent", "Playful", "Alert", "Tenacious", "Affectionate"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Dog Breeds</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover the perfect companion for your family from our selection of
          lovable and well-tempered dog breeds. Each breed has its own unique
          characteristics and charm.
        </p>
      </section>

      {/* Breeds Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {dogBreeds.map((breed) => (
          <div
            key={breed.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={breed.image}
                alt={breed.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{breed.name}</h2>
              <p className="text-gray-600 mb-4">{breed.description}</p>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Traits:</h3>
                <div className="flex flex-wrap gap-2">
                  {breed.traits.map((trait, index) => (
                    <span
                      key={index}
                      className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to={`/breeds/${breed.id}`}
                className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700"
              >
                Learn more <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-amber-50 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Find Your Perfect Companion</h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          Not sure which breed is right for your lifestyle? Our experts can help
          you find the perfect match based on your living situation, activity
          level, and preferences.
        </p>
        <Link
          to="/contact"
          className="bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors inline-block"
        >
          Contact Us For Advice
        </Link>
      </section>
    </div>
  );
};

export default BreedsPage;
