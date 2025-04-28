import React from "react";
import HeroSection from "./Section/HeroSection";
import DogBreed from "./Section/DogBreed";
import PetProducts from "./Section/PetProducts";
import BlogSection from "./Section/BlogSection";
import NewsLetter from "./Section/NewsLetter";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <DogBreed />
      <PetProducts />
      <BlogSection />
      <NewsLetter />
    </div>
  );
};

export default HomePage;

