import React, { useState, useEffect } from "react";
import Image from "next/image";

type ImageGalleryItem = {
  imageSrc: string;
  name: string;
  company: string;
  review: string;
};

type CarouselProps = {
  testimonyList: ImageGalleryItem[];
};

const CarouselTestimony: React.FC<CarouselProps> = ({ testimonyList }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === testimonyList.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [testimonyList]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-12 items-center">
        <div className="relative">
          <div className="absolute top-8 left-5 z-10">
            <svg
              width="56"
              height="47"
              viewBox="0 0 56 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.246 23.362L32.246 0.277003L55.16 0.277003V6.262C55.16 15.61 54.476 22.564 53.108 27.124C51.626 31.798 47.807 38.41 41.651 46.96L31.904 41.488C37.034 32.71 39.998 26.668 40.796 23.362L32.246 23.362ZM1.124 23.362V0.277003H24.038V6.262C24.038 15.61 23.354 22.564 21.986 27.124C20.504 31.798 16.685 38.41 10.529 46.96L0.781998 41.488C5.912 32.71 8.876 26.668 9.674 23.362H1.124Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="w-[400px] h-[400px] rounded-full border-[20px] border-[#F17A36] p-3 relative">
            <Image
              src={testimonyList[currentImageIndex].imageSrc}
              className="w-full object-contain"
              width={2020}
              height={2020}
              alt="Header Background"
            />
          </div>
        </div>
        <div className="col-span-2">
          <h1 className="text-3xl font-black tracking-widest">
            {testimonyList[currentImageIndex].name} -{" "}
            <span className="font-medium text-gray-500">
              {testimonyList[currentImageIndex].company}
            </span>
          </h1>
          <p className="text-lg font-extralight mt-4">
            {testimonyList[currentImageIndex].review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselTestimony;
