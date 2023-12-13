import React, { useState, useEffect } from "react";
import Image from "next/image";

type ImageGalleryItem = {
  id: number;
  imageSrc: string;
  title: string;
  date: string;
};

type CarouselProps = {
  imageGallery: ImageGalleryItem[];
};

const CarouselEvent: React.FC<CarouselProps> = ({ imageGallery }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageGallery.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [imageGallery]);

  return (
    <div>
      <div className="relative h-[500px] overflow-hidden rounded-lg">
        <Image
          src={imageGallery[currentImageIndex].imageSrc}
          className="w-full h-full object-cover rounded-lg"
          width={2020}
          height={1020}
          alt={`Image ${currentImageIndex + 1}`}
        />
        <div className=" bg-black bg-opacity-50 absolute bottom-0 w-full pt-4 px-10">
          <h1 className="text-md font-semibold tracking-widest">
            {imageGallery[currentImageIndex].title}
          </h1>
          <p className="text-sm font-extralight mb-4">
            {imageGallery[currentImageIndex].date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselEvent;
