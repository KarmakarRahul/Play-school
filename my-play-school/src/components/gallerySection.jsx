import React from 'react';

const GallerySection = () => {
  const dummyImages = [
    '/src/assets/img1.jpg',
    '/src/assets/img2.jpg',
    '/src/assets/img3.jpg',
    '/src/assets/img4.jpg',
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-2xl font-bold mb-4">
          <span className="border-l-4 border-yellow-400 pl-2">Gallery</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">All Photos & Video</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {dummyImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}
        </div>
        <div className="text-center">
          <button className="bg-yellow-400 text-black py-2 px-4 rounded-full text-lg font-bold">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
