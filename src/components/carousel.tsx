"use client";
import { bannerImageProps } from "@/types/banner";
// components/Carousel.js
import { useState } from "react";

const Carousel = ({ data }: any) => {
  const [currentIndex, setCurrentIndex] = useState<any>(0 || false);
  console.log(data)
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? data !== undefined && data?.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = data !== undefined && currentIndex === data?.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="relative w-full  -z-10 -mt-28 overflow-hidden">

          
        <div
          className={`flex transition-transform ease-out duration-500   `}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            
          {data?.map((image: any, index: any) => (
           
              <img
                key={index}
                src={image.url}
                alt={`${image.alt}`}
                className="w-full flex-shrink-0 object-fill h-[800px]  "
              />
            ))}
            
       
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 text-2xl transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 z-30  rounded-full"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 text-2xl transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 z-30 rounded-full"
      >
        ›
      </button>
    </>
  );
};

export default Carousel;
