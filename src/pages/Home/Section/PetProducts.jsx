import React from "react";

const PetProducts = () => {
  const productsList = [
    { name: "product one", image: "/pet-products/img1.jpg" },
    { name: "product two", image: "/pet-products/img2.jpg" },
    { name: "product three", image: "/pet-products/img3.jpg" },
    { name: "product Four", image: "/pet-products/img4.jpg" },
    { name: "product Five", image: "/pet-products/img5.jpg" },
    { name: "product Six", image: "/pet-products/img6.jpg" },
  ];

  return (
    <section className="px-4 my-[128px]  max-w-[1166px] left-1/2 -translate-x-1/2 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 place-items-center">
        {/* Content Side */}
        <div className=" text-center lg:text-left px-8 pr-4">
          <h1 className="text-4xl md:text-4xl lg:text-[36px] font-semibold">
            Pet Products
          </h1>
          <p className="text-xs md:text-xl lg:text-[18px] font-normal leading-relaxed md:leading-[32px] mt-3">
            All products are designed for ease of use and durable, as well as
            looking good. You can choose your own colours to make your item
            unique.
          </p>
        </div>

        {/* Image Side */}
        <div className="">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 justify-items-center">
            {productsList.map((item, index) => (
              <div
                key={index}
                className="w-full max-w-[150px] aspect-square bg-[#C4C4C4] overflow-hidden rounded-md"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetProducts;
