"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CardProduct from "@/components/Card/CardProduct";

const productData = [
  {
    id: 1,
    name: "HELM HARLEY",
    description: "Helm orange Harley Davidson",
    imageSrc:
      "https://i.pinimg.com/originals/e9/4f/64/e94f64b551b98370d48743d4e061f643.png",
    price: "75.000",
  },
  {
    id: 2,
    name: "JAKET KULIT",
    description: "Jaket kulit asli berkualitas tinggi",
    imageSrc:
      "https://i.pinimg.com/originals/e9/4f/64/e94f64b551b98370d48743d4e061f643.png",
    price: "75.000",
  },
  {
    id: 3,
    name: "SEPEDA MOTOR",
    description: "Sepeda motor sport terbaru",
    imageSrc:
      "https://i.pinimg.com/originals/e9/4f/64/e94f64b551b98370d48743d4e061f643.png",
    price: "75.000",
  },
  {
    id: 4,
    name: "KAMERA DSLR",
    description: "Kamera profesional untuk fotografi",
    imageSrc:
      "https://i.pinimg.com/originals/e9/4f/64/e94f64b551b98370d48743d4e061f643.png",
    price: "75.000",
  },
  {
    id: 5,
    name: "SEPATU BOOT",
    description: "Sepatu boot kulit alami",
    imageSrc:
      "https://i.pinimg.com/originals/e9/4f/64/e94f64b551b98370d48743d4e061f643.png",
    price: "75.000",
  },
  {
    id: 6,
    name: "TAS KULIT",
    description: "Tas kulit sintetis dengan desain unik",
    imageSrc:
      "https://i.pinimg.com/originals/e9/4f/64/e94f64b551b98370d48743d4e061f643.png",
    price: "75.000",
  },
  {
    id: 7,
    name: "KEMEJA FLANEL",
    description: "Kemeja flanel pria",
    imageSrc:
      "https://i.pinimg.com/originals/e9/4f/64/e94f64b551b98370d48743d4e061f643.png",
    price: "75.000",
  },
  {
    id: 8,
    name: "JAM TANGAN",
    description: "Jam tangan elegan untuk pria dan wanita",
    imageSrc:
      "https://i.pinimg.com/originals/e9/4f/64/e94f64b551b98370d48743d4e061f643.png",
    price: "75.000",
  },
];

export default function Home() {
  const handleButtonClick = () => {
    console.log("Tombol ditekan!");
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
            {productData.map((product) => (
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
