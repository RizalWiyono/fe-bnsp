"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Button from "@/components/Button/Button";
import CardProduct from "@/components/Card/CardProduct";
import CardArticle from "@/components/Card/CardArticle";
import CarouselGallery from "@/components/Carousel/CarouselGallery";
import CarouselEvent from "@/components/Carousel/CarouselEvent";
import CarouselTestimony from "@/components/Carousel/CarouselTestimony";

import Header from "@/assets/img/Background/Header.png";
import About from "@/assets/img/Background/About.png";

const testimonials = [
  {
    name: "Eva",
    company: "Amazon",
    imageSrc: "https://i.ibb.co/84h8svL/eight.png",
    review:
      "Lorem 1 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
  },
  {
    name: "Evelyn",
    company: "Netflix",
    imageSrc: "https://i.ibb.co/k8Jnx61/five.png",
    review:
      "Lorem 2 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
  },
  {
    name: "Jack",
    company: "Google",
    imageSrc: "https://i.ibb.co/Yj8pMF8/four.png",
    review:
      "Lorem 3 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
  },
  {
    name: "Sam",
    company: "Microsoft",
    imageSrc: "https://i.ibb.co/ph360c6/nine.png",
    review:
      "Lorem 4 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
  },
  {
    name: "Abigail",
    company: "Netflix",
    imageSrc: "https://i.ibb.co/gwNmrLn/one.png",
    review:
      "Lorem 5 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
  },
];

const visiMisiData = [
  {
    id: 1,
    content:
      "Membangun legenda dan memimpin melalui inovasi, evolusi, dan emosi.",
  },
  {
    id: 2,
    content:
      "Lebih dari sekadar membangun mesin, kami berdiri untuk mengejar petualangan yang tak lekang oleh waktu. Kebebasan untuk jiwa.",
  },
];

const imageGallery = [
  {
    id: 1,
    imageSrc:
      "https://www.harley-davidson.com/content/dam/h-d/images/content-images/short-hero/event-calendar-short-hero.jpg",
  },
  {
    id: 2,
    imageSrc:
      "https://d2bywgumb0o70j.cloudfront.net/2019/03/22/2e680d3513243d6a372a3befdc13d953_d89562adcef2ba7d.jpg",
  },
];

const eventGallery = [
  {
    id: 1,
    imageSrc:
      "https://cdn.dx1app.com/Harley-Davidson/Riding-Academy/banner_1920x823.jpg",
    title: "RIDING BARENG",
    date: "20-Desember-2023",
  },
  {
    id: 1,
    imageSrc:
      "https://www.cyclenews.com/wp-content/uploads/2019/03/Jarod-Vanderkooi-flat-tracker.jpg",
    title: "RACE",
    date: "26-Desember-2023",
  },
];


export default function Home() {
  const [dataProduct, setDataProduct] = useState<any[]>([]);
  const [dataArticle, setDataArticle] = useState<any[]>([]);
  const [visiMisi, setVisiMisi] = useState(visiMisiData[0]);
  const [activeTab, setActiveTab] = useState(1);
  const router = useRouter();

  useEffect(() => {
    fetchArticle();
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

  const fetchArticle = async () => {
    try {
      const response: AxiosResponse = await axios.get(
        "http://localhost:3003/articles"
      );
      console.log(response.data.motorbikes);
      setDataArticle(response.data.motorbikes);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleButtonClickArticle = () => {
    console.log("Tombol ditekan!");
    router.push(`/article/1`);
  };

  const changeVisiMisi = (id: number) => {
    const selectedVisiMisi = visiMisiData.find((item) => item.id === id);
    if (selectedVisiMisi) {
      setVisiMisi(selectedVisiMisi);
      setActiveTab(id);
    }
  };

  const handleButtonClick = () => {
    console.log("Tombol ditekan!");
  };

  return (
    <main>
      <Navbar />
      <section className="header">
        <Image
          src={Header}
          className="w-full h-screen object-contain"
          width={2020}
          height={1020}
          alt="Header Background"
        />
      </section>
      <section className="service py-6 bg-[#1d1d1d]" id="service">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <div className="border-r-[1px] border-r-[#FFF]">
              <h1 className="text-md font-semibold tracking-widest">
                KECEPATAN
              </h1>
              <p className="text-sm font-extralight">
                Jangan biarkan kesempurnaan menghalangi proses dan kecepatan
              </p>
            </div>
            <div className="border-r-[1px] border-r-[#FFF]">
              <h1 className="text-md font-semibold tracking-widest">RINGAN</h1>
              <p className="text-sm font-extralight">
                Memaksimalkan dampak dengan sumber daya yang terbatas
              </p>
            </div>
            <div>
              <h1 className="text-md font-semibold tracking-widest">
                KEBERANIAN
              </h1>
              <p className="text-sm font-extralight">
                Mengambil risiko dan melawan norma
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us py-20" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-12 items-center">
            <Image
              src={About}
              className="w-full object-contain"
              width={720}
              height={420}
              alt="Header Background"
            />
            <div>
              <h1 className="text-3xl font-black tracking-widest">
                <i>
                  HARLEY <br /> <span className="text-[#F17A36]">DAVIDSON</span>
                </i>
              </h1>
              <p className="text-lg font-extralight mt-4">
                Pada tahun 1903, dari sebuah gudang kecil di Milwaukee,
                Wisconsin, empat orang pemuda menyalakan api budaya yang
                kemudian tumbuh dan menyebar ke seluruh wilayah dan generasi.
                Inovasi dan imajinasi mereka tentang apa yang mungkin dilakukan
                dengan roda dua memicu revolusi transportasi dan gaya hidup yang
                akan membuat Harley-Davidson menjadi merek sepeda motor dan gaya
                hidup yang paling diminati di dunia. Saat ini, kami terus
                mendefinisikan budaya dan gaya hidup sepeda motor, membangkitkan
                emosi yang menggugah jiwa yang tercermin dalam setiap produk dan
                pengalaman yang kami berikan - seperti yang telah kami lakukan
                selama lebih dari satu abad dan akan terus kami lakukan untuk
                generasi mendatang.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="vision-mission py-20 bg-[#1d1d1d]"
        id="vision-mission"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div
              className={`border-r-[1px] border-r-[#FFF] ${
                activeTab === 1 ? "text-[#F17A36]" : ""
              }`}
            >
              <h1
                className="text-md text-center font-semibold tracking-widest hover:text-[#F17A36] cursor-pointer"
                onClick={() => changeVisiMisi(1)}
              >
                VISI
              </h1>
            </div>
            <div className={`${activeTab === 2 ? "text-[#F17A36]" : ""}`}>
              <h1
                className="text-md text-center font-semibold tracking-widest hover:text-[#F17A36] cursor-pointer"
                onClick={() => changeVisiMisi(2)}
              >
                MISI
              </h1>
            </div>
          </div>

          <p className="text-lg text-center font-extralight mt-14">
            {visiMisi.content}
          </p>
          <div className="w-[100px] h-[2px] bg-white rounded-full mx-auto mt-8"></div>
        </div>
      </section>
      <section className="merchandise py-20" id="merchandise">
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
          <div className="w-full flex justify-center pt-10">
            <Link href="/product" className="mx-auto">
              <Button
                onClickAction={handleButtonClick}
                title="LIHAT LEBIH BANYAK"
                typeButton="primary"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="gallery py-20 bg-[#1d1d1d]" id="gallery">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl text-center font-black tracking-widest">
            <i>GALERI</i>
          </h1>
          <p className="text-md text-center font-extralight mt-4">
            Berisi tentang beberapa rangkaian kegiatan yang pernah kita lakukan.
          </p>
          <div className="mt-10">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg relative">
              <CarouselGallery imageGallery={imageGallery} />
            </div>
          </div>
        </div>
      </section>
      <section className="event py-20" id="event">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl text-center font-black tracking-widest">
            <i>EVENT</i>
          </h1>
          <p className="text-md text-center font-extralight mt-4">
            Berisi tentang beberapa rangkaian kegiatan yang pernah kita lakukan.
          </p>

          <div className="mt-10">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg relative">
              <CarouselEvent imageGallery={eventGallery} />
            </div>
          </div>
        </div>
      </section>
      <section className="testimony py-20 bg-[#1d1d1d]" id="testimony">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl text-center font-black tracking-widest">
            <i>TESTIMONI</i>
          </h1>
          <p className="text-md text-center font-extralight mt-4">
            Berisi tentang beberapa testimoni dari para pembeli merchandise
            kita.
          </p>

          <div className="mt-10">
            <CarouselTestimony testimonyList={testimonials} />
          </div>
        </div>
      </section>
      <section className="article py-20" id="article">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl text-center font-black tracking-widest">
            <i>ARTIKEL</i>
          </h1>
          <p className="text-md text-center font-extralight mt-4">
            Artikel yang bisa anda baca dimana saja
          </p>
          <div className="grid grid-cols-4 gap-4 mt-20">
            {dataArticle.map((product) => (
              <CardArticle
                key={product.id}
                product={product}
                handleButtonClick={handleButtonClickArticle}
              />
            ))}
          </div>
          <div className="w-full flex justify-center pt-10">
            <Link href="/article" className="mx-auto">
              <Button
                onClickAction={handleButtonClick}
                title="LIHAT LEBIH BANYAK"
                typeButton="primary"
              />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
