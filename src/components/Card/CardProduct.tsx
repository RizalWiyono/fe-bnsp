import Image from "next/image";
import React from "react";

import Button from "../Button/Button";

type Product = {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  price: string;
};

type CardProductProps = {
  product: Product;
  handleButtonClick: () => void;
};

const CardProduct: React.FC<CardProductProps> = ({
  product,
  handleButtonClick,
}) => {
  return (
    <div className="bg-white bg-opacity-10 p-4 rounded-lg">
      <div className="bg-white bg-opacity-10 rounded-lg h-[200px] p-4">
        <Image
          src={product.imageSrc}
          className="w-full h-full object-contain"
          width={720}
          height={420}
          alt="Header Background"
        />
      </div>
      <div className="pt-4">
        <h1 className="text-md font-semibold tracking-widest">
          {product.name}
        </h1>
        <p className="text-sm font-extralight mb-4">{product.description}</p>
        <p className="text-sm font-extralight mb-4">Rp. {product.price}</p>
        <Button
          onClickAction={handleButtonClick}
          title="PESAN"
          typeButton="secondary"
        />
      </div>
    </div>
  );
};

export default CardProduct;
