import React from "react";
const DotsIndicator = ({data, currentIndex, setCurrentIndex}:any) => {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {data.map((_: any, index: number) => (
        <button
          title="dots indicator"
          type="button"
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`w-3 h-3 rounded-full ${
            index === currentIndex ? "bg-blue-500" : "bg-gray-300"
          }`}
        >
          °
        </button>
      ))}
    </div>
  );
};

export default DotsIndicator;
