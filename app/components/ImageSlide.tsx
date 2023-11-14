"use client";

import React from "react";
import { Unsplash } from "../unsplash/unsplash";
import ImageComponent from "./ImageComponent";

const ImageSlide = ({
  slides,
  category,
  setViewedSlide,
}: {
  slides: Unsplash[];
  category: string;
  setViewedSlide: React.Dispatch<React.SetStateAction<Unsplash | null>>;
}) => {
  return (
    <div className="w-full mb-4 sm:mb-8">
      <h3 className="capitalize font-bebas text-xl sm:text-2xl px-8">
        {category}:
      </h3>
      <div className="flex gap-2 overflow-x-auto px-8 slide_mask">
        {slides.map((image, index) => (
          <ImageComponent
            key={`${index}${category}`}
            image={image}
            setViewedSlide={setViewedSlide}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlide;
