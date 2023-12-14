"use client";

import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CardProduct from "@/components/Card/CardProduct";

export default function Home() {
  const [dataProduct, setDataProduct] = useState<any[]>([]);
  const handleButtonClick = () => {
    console.log("Tombol ditekan!");
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response: AxiosResponse = await axios.get(
        "http://localhost:3003/products"
      );
      console.log(response.data.motorbikes);
      setDataProduct(response.data.motorbikes);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  return (
    <main>
      <Navbar />
      <section className="merchandise pt-40 py-20" id="merchandise">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl text-center font-black tracking-widest">
            <i>MERCHANDISE</i>
          </h1>
          <p className="text-md text-center font-extralight mt-4">
            Merchandise yang bisa anda dapatkan secara terpisah
          </p>
          <div className="grid grid-cols-4 gap-4 mt-20">
            {dataProduct.map((product) => (
              <CardProduct
                key={product.id}
                product={product}
                handleButtonClick={handleButtonClick}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
