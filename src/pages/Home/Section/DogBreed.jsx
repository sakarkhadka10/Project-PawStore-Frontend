import React from "react";

const DogBreed = () => {
  const breedImage = [
    { name: "German Shepard", image: "/dog-breed/GermanShepard.jpg" },
    { name: "Golden Retriver", image: "/dog-breed/GoldenRetriver.jpg" },
    { name: "Japanese Spitz", image: "/dog-breed/JapaneseSpitz.jpg" },
    { name: "Labrador", image: "/dog-breed/Labrador.jpg" },
    { name: "Pitbull", image: "/dog-breed/pitbull.jpg" },
    { name: "Pug", image: "/dog-breed/pug.jpg" },
    { name: "Siberian Husky", image: "/dog-breed/SiberianHusky.jpg" },
  ];
  return (
    <header className="mt-24  max-w-[1166px] relative left-1/2 -translate-x-1/2 flex justify-center items-center text-center">
      <main>
        {/* Text Container */}

        <h1 className="text-4xl lg:text-5xl font-bold">Dog Breed</h1>
        <p className="text-lg lg:text-xl mt-2">
          Find yourself a perfect freind from a wide variety of choices.
        </p>

        {/* Image Container */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mt-10 place-items-center gap-5 lg:gap-9">
          {breedImage.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center max-w-[136px] lg:gap-2 "
            >
              <div className="rounded-full overflow-hidden w-[136px] h-[137px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-sm font-medium lg:text-md">{item.name}</h3>
            </div>
          ))}
        </div>
      </main>
    </header>
  );
};

export default DogBreed;
