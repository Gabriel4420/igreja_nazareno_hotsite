import React from "react";

// import { Container } from './styles';

const NavigationArrows = ({ handleNext, handlePrev }: any) => {
  return (
    <>
      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full ml-2"
      >
        &#10094; {/* Left arrow character */}
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full mr-2"
      >
        &#10095; {/* Right arrow character */}
      </button>
    </>
  );
};

export default NavigationArrows;
