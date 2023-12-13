import Image from "next/image";
import React from "react";

import Button from "../Button/Button";

type Product = {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
};

type CardArticleProps = {
  product: Product;
  handleButtonClick: () => void;
};

const CardArticle: React.FC<CardArticleProps> = ({
  product,
  handleButtonClick,
}) => {
  return (
    <div className="bg-white bg-opacity-10 p-4 rounded-lg">
      <div className="rounded-lg">
        <Image
          src={product.imageSrc}
          className="w-full h-full object-contain rounded-lg"
          width={720}
          height={420}
          alt="Header Background"
        />
      </div>
      <div className="pt-4">
        <h1 className="text-md font-semibold tracking-widest line-clamp-1">
          {product.name}
        </h1>
        <p className="text-sm font-extralight mt-2 mb-4 line-clamp-3">
          {product.description}
        </p>
        <Button
          onClickAction={handleButtonClick}
          title="LEBIH LENGKAP"
          typeButton="primary"
        />
      </div>
    </div>
  );
};

export default CardArticle;
