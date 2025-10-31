import React, { useState } from "react";

const ImageArea = ({ images = [] }) => {
  const [selectedImages, setSelectedImages] = useState([]);


  const handleSelect = (id) => {
    setSelectedImages((prev) =>
      prev.includes(id) ? prev.filter((imgId) => imgId !== id) : [...prev, id]
    );
  };

  if (!images.length) {
    return (
      <div className="flex justify-center items-center flex-col h-64 text-center">
        <p className="text-gray-500 text-3xl font-semibold">Start Your Search</p>
        <p className="text-gray-500 text-lg max-w-md mt-1">
          Search for stunning images from Unsplash’s vast collection
        </p>
      </div>
    );
  }

  return (
    <div className="px-6 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Results ({images.length})
        </h2>

        <p className="text-indigo-600 font-medium text-lg">
          Selected: {selectedImages.length}{" "}
          {selectedImages.length === 1 ? "image" : "images"}
        </p>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
        {images.map((img) => {
          const isSelected = selectedImages.includes(img.id);

          return (
            <div
              key={img.id}
              className={`relative break-inside-avoid rounded-2xl overflow-hidden shadow-md transition-all duration-300 ${
                isSelected ? "ring-2 ring-indigo-500" : "hover:shadow-lg"
              }`}>
              <img
                src={img.url}
                alt={img.description || "Unsplash Image"}
                className="w-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"/>

              <div className="absolute bottom-0 left-0 right-0  text-white text-sm p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="truncate">{img.user}</p>
              </div>

              <button
                onClick={() => handleSelect(img.id)}
                className={`absolute top-3 right-3 w-5 h-5 flex items-center justify-center rounded-full border border-white/70 backdrop-blur-sm transition-all duration-300 ${
                  isSelected
                    ? "bg-indigo-500 border-indigo-500"
                    : "hover:bg-white/30"
                }`}
              >
                {isSelected && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="white"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageArea;
