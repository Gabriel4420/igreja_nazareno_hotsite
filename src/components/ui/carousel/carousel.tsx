"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import DotsIndicator from "./dotsIndicator";
import NavigationArrows from "./navigationArrows";

const Carousel = ({ data }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-screen mx-auto overflow-hidden">
      <div className="relative w-full h-screen -z-10">
        <div
          style={{ backgroundImage: `url(${data[currentIndex].url})` }}
          className=" h-full w-full bg-repeat-x blur-md"
        ></div>
        {/* Images */}
        {data?.map((image: any, index: any) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out blur-none  ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              layout="responsive"
              objectFit="contain"
              className="w-full h-full  blur-none"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <NavigationArrows handleNext={handleNext} handlePrev={handlePrev} />
      {/* Dots (Indicators) */}
      <DotsIndicator
        data={data}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Carousel), {
  ssr: false, // Desabilita o SSR para este componente
});
