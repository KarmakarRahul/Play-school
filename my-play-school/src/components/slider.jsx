import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const images = [
    "/src/assets/imgs1.jpg?text=Image+1",
    "/src/assets/imgs1.jpg?text=Image+2",
    "/src/assets/imgs3.jpg?text=Image+3"
  ];

  return (
    <div className="flex justify-center items-center space-x-4 p-4 bg-gray-100">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative w-1/3 transition-transform duration-300 ease-in-out ${
            index === activeIndex ? 'transform scale-110 z-10' : 'transform scale-90'
          }`}
          onClick={() => setActiveIndex(index)}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
