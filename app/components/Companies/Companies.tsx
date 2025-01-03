"use client";

import React, { useState, useEffect } from "react";

const data = [
  { imgSrc: "/assets/slickCompany/1.svg" },
  { imgSrc: "/assets/slickCompany/2.svg" },
  { imgSrc: "/assets/slickCompany/3.svg" },
  { imgSrc: "/assets/slickCompany/1.svg" },
  { imgSrc: "/assets/slickCompany/2.svg" },
  { imgSrc: "/assets/slickCompany/3.svg" },
];

const Companies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  // Automatic slide change every 2 seconds (2000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative text-center bg-lightpink">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg my-10 text-lightgrey">Trusted Partners with us</h2>

        {/* Carousel Wrapper */}
        <div className="relative overflow-hidden">
          {/* Carousel Images */}
          <div className="flex transition-transform duration-700 ease-in-out">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-1/3 px-2"
                style={{
                  transform: `translateX(-${(currentIndex % data.length) * 33.33}%)`,
                }}
              >
                <img
                  src={item.imgSrc}
                  alt={`Company ${index}`}
                  className="w-120 h-120 rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center mt-4">
          {data.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 mx-2 rounded-full cursor-pointer bg-opacity-50 ${
                index === currentIndex ? "bg-black" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
