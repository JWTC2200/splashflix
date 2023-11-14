"use client";

import React, { useState, useEffect } from "react";
import ImageSlide from "../components/ImageSlide";
import { Unsplash } from "../unsplash/unsplash";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

interface Slides {
  slides: Unsplash[];
  category: string;
}

const page = () => {
  const [slides, setSlides] = useState<Slides[] | null>(null);
  const [viewedSlide, setViewedSlide] = useState<Unsplash | null>(null);
  const [closeSlide, setCloseSlide] = useState<boolean>(false);

  const viewedSlideStyles = closeSlide ? " close_slide" : " open_slide";

  const getImages = async () => {
    try {
      const res = await fetch("/api/testroute");
      console.log(res);
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      const data = await res.json();
      console.log(data);
      setSlides(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <main className="overflow-hidden mx-auto max-w-screen-2xl p-8">
      {viewedSlide ? (
        <div
          className={
            `fixed w-[90vw] max-w-screen-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden border-2 hover:shadow-[0_0_12px_4px_#fff] z-20 ` +
            viewedSlideStyles
          }
          onClick={() => {
            setCloseSlide(true);
            setTimeout(() => {
              setViewedSlide(null);
              setCloseSlide(false);
            }, 400);
          }}
        >
          <img
            src={viewedSlide.urls.regular}
            alt={viewedSlide.alt_description}
            className="w-full h-full object-cover"
          />
          <nav className="absolute top-1 left-1">
            <Link
              href={viewedSlide.user.links.html}
              className="font-satisfy text-3xl hover:text-red-300 flex gap-1 items-center slide_shadow"
            >
              Taken by: {viewedSlide.user.name}
              <BiLinkExternal />
            </Link>
          </nav>
          <div className="absolute bottom-2 left-2">
            <Link
              href={viewedSlide.links.html}
              className="capitalize slide_shadow hover:text-red-300 active:text-yellow-400 flex gap-1 items-center"
            >
              {viewedSlide.alt_description}
              <BiLinkExternal />
            </Link>
            {viewedSlide.location.name ? (
              <p className="text-slate-300 slide_shadow">
                {viewedSlide.location.name}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
      <div className="flex flex-col">
        {slides?.map((slide) => (
          <ImageSlide
            key={slide.category}
            {...slide}
            setViewedSlide={setViewedSlide}
          />
        ))}
      </div>
    </main>
  );
};

export default page;
