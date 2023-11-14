"use client";

import React from "react";
import { Unsplash } from "../unsplash/unsplash";

const ImageComponent = ({
  image,
  setViewedSlide,
}: {
  image: Unsplash;
  setViewedSlide: React.Dispatch<React.SetStateAction<Unsplash | null>>;
}) => {
  return (
    <div className="h-60 sm:h-80 min-w-[240px] border-2 m-2 cursor-pointer hover:shadow-[0_0_12px_4px_#fff] rounded-xl">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="object-cover h-full w-full rounded-xl"
        onClick={() => setViewedSlide(image)}
      />
    </div>
  );
};

export default ImageComponent;
