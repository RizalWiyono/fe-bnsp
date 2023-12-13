import React, { useState, useEffect } from "react";
import Image from "next/image";

type ImageGalleryItem = {
  id: number;
  imageSrc: string;
};

type CarouselProps = {
  imageGallery: ImageGalleryItem[];
};

const CarouselGallery: React.FC<CarouselProps> = ({ imageGallery }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageGallery.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

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
      </div>
    </div>
  );
};

export default CarouselGallery;
