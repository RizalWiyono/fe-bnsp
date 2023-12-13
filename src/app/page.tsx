"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
      "Building our legend and leading through innovation, evolution and emotion.",
  },
  {
    id: 2,
    content:
      "More than building machines, we stand for the timeless pursuit of adventure. Freedom for the soul.",
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
];

const articleData = [
  {
    id: 1,
    name: "DRAG RACE HARLEY DAVIDSON",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum risus lectus, vel ullamcorper libero vehicula et. Integer in tellus aliquam, mollis metus ut, gravida magna. Aenean aliquet a leo et suscipit. Quisque ac sollicitudin velit. Phasellus tempor purus sit amet justo egestas lobortis. Proin dignissim molestie nisl a congue. Sed sit amet varius enim, eu euismod magna. Donec hendrerit venenatis lorem sed euismod. Vestibulum vel sapien viverra, blandit urna vel, mollis dolor. Cras ac nisi sit amet nisi consectetur porttitor eu at sapien. Morbi placerat congue leo, eu tempor tellus dapibus id. Donec vitae nisl convallis, rhoncus lacus nec, pharetra sem. Nunc egestas urna tellus, a egestas massa feugiat faucibus. Cras feugiat felis at gravida consequat. Donec eget vehicula urna, ac consequat dui. Praesent nisi turpis, semper eget velit vel, sollicitudin blandit velit. Proin id enim ac nisi placerat porttitor ac et leo. Etiam mollis sapien quis maximus blandit. Nullam id venenatis tellus. Curabitur euismod a ex at volutpat. Pellentesque tortor diam, ultricies id nulla sit amet, molestie lobortis erat. Phasellus dolor quam, pellentesque eget lorem eu, dignissim fringilla turpis. Ut sollicitudin tortor ante, quis maximus tortor blandit eget. Pellentesque id quam in eros ultrices consectetur. Donec sit amet fringilla massa.Fusce blandit malesuada nunc, vitae fringilla nisi feugiat non. Morbi ut eros vitae augue facilisis placerat et ut velit. Phasellus volutpat et leo eu porttitor. Integer ac nisl mollis, tristique neque non, viverra lectus. Phasellus gravida diam ut varius mattis. Pellentesque mattis suscipit arcu non tincidunt. Nullam tempor accumsan arcu, id blandit metus molestie eget. Vivamus sed purus elit. Vivamus euismod ipsum lorem, quis feugiat est malesuada aVivamus elementum metus vel blandit aliquam. Phasellus interdum turpis sit amet orci molestie aliquet. Cras condimentum elementum mollis. Donec faucibus lectus felis, vitae ornare felis vulputate at. Aenean dolor massa, condimentum in tellus quis, gravida vestibulum dolor. Aenean ut commodo felis. Mauris massa metus, ultrices sed tortor ac, feugiat maximus quam. Suspendisse porttitor lectus nec tortor porttitor dapibus. Sed varius diam quis augue tempus cursus ac condimentum nisi. Ut sed risus at magna lobortis consequat. Aliquam in suscipit enim, elementum euismod turpis. Sed quis vestibulum turpis. Vivamus ac dolor tempor, rhoncus tellus a, dignissim est. Vivamus quis dapibus neque. Sed sapien velit, ultricies a consequat id, pulvinar at tellus.",
    imageSrc:
      "https://pict.sindonews.net/dyn/850/pena/news/2023/11/08/121/1246779/hogers-indonesia-siap-gelar-drag-race-harleydavidson-lai.jpg",
  },
  {
    id: 2,
    name: "DRAG RACE HARLEY DAVIDSON",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum risus lectus, vel ullamcorper libero vehicula et. Integer in tellus aliquam, mollis metus ut, gravida magna. Aenean aliquet a leo et suscipit. Quisque ac sollicitudin velit. Phasellus tempor purus sit amet justo egestas lobortis. Proin dignissim molestie nisl a congue. Sed sit amet varius enim, eu euismod magna. Donec hendrerit venenatis lorem sed euismod. Vestibulum vel sapien viverra, blandit urna vel, mollis dolor. Cras ac nisi sit amet nisi consectetur porttitor eu at sapien. Morbi placerat congue leo, eu tempor tellus dapibus id. Donec vitae nisl convallis, rhoncus lacus nec, pharetra sem. Nunc egestas urna tellus, a egestas massa feugiat faucibus. Cras feugiat felis at gravida consequat. Donec eget vehicula urna, ac consequat dui. Praesent nisi turpis, semper eget velit vel, sollicitudin blandit velit. Proin id enim ac nisi placerat porttitor ac et leo. Etiam mollis sapien quis maximus blandit. Nullam id venenatis tellus. Curabitur euismod a ex at volutpat. Pellentesque tortor diam, ultricies id nulla sit amet, molestie lobortis erat. Phasellus dolor quam, pellentesque eget lorem eu, dignissim fringilla turpis. Ut sollicitudin tortor ante, quis maximus tortor blandit eget. Pellentesque id quam in eros ultrices consectetur. Donec sit amet fringilla massa.Fusce blandit malesuada nunc, vitae fringilla nisi feugiat non. Morbi ut eros vitae augue facilisis placerat et ut velit. Phasellus volutpat et leo eu porttitor. Integer ac nisl mollis, tristique neque non, viverra lectus. Phasellus gravida diam ut varius mattis. Pellentesque mattis suscipit arcu non tincidunt. Nullam tempor accumsan arcu, id blandit metus molestie eget. Vivamus sed purus elit. Vivamus euismod ipsum lorem, quis feugiat est malesuada aVivamus elementum metus vel blandit aliquam. Phasellus interdum turpis sit amet orci molestie aliquet. Cras condimentum elementum mollis. Donec faucibus lectus felis, vitae ornare felis vulputate at. Aenean dolor massa, condimentum in tellus quis, gravida vestibulum dolor. Aenean ut commodo felis. Mauris massa metus, ultrices sed tortor ac, feugiat maximus quam. Suspendisse porttitor lectus nec tortor porttitor dapibus. Sed varius diam quis augue tempus cursus ac condimentum nisi. Ut sed risus at magna lobortis consequat. Aliquam in suscipit enim, elementum euismod turpis. Sed quis vestibulum turpis. Vivamus ac dolor tempor, rhoncus tellus a, dignissim est. Vivamus quis dapibus neque. Sed sapien velit, ultricies a consequat id, pulvinar at tellus.",
    imageSrc:
      "https://pict.sindonews.net/dyn/850/pena/news/2023/11/08/121/1246779/hogers-indonesia-siap-gelar-drag-race-harleydavidson-lai.jpg",
  },
  {
    id: 3,
    name: "DRAG RACE HARLEY DAVIDSON",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum risus lectus, vel ullamcorper libero vehicula et. Integer in tellus aliquam, mollis metus ut, gravida magna. Aenean aliquet a leo et suscipit. Quisque ac sollicitudin velit. Phasellus tempor purus sit amet justo egestas lobortis. Proin dignissim molestie nisl a congue. Sed sit amet varius enim, eu euismod magna. Donec hendrerit venenatis lorem sed euismod. Vestibulum vel sapien viverra, blandit urna vel, mollis dolor. Cras ac nisi sit amet nisi consectetur porttitor eu at sapien. Morbi placerat congue leo, eu tempor tellus dapibus id. Donec vitae nisl convallis, rhoncus lacus nec, pharetra sem. Nunc egestas urna tellus, a egestas massa feugiat faucibus. Cras feugiat felis at gravida consequat. Donec eget vehicula urna, ac consequat dui. Praesent nisi turpis, semper eget velit vel, sollicitudin blandit velit. Proin id enim ac nisi placerat porttitor ac et leo. Etiam mollis sapien quis maximus blandit. Nullam id venenatis tellus. Curabitur euismod a ex at volutpat. Pellentesque tortor diam, ultricies id nulla sit amet, molestie lobortis erat. Phasellus dolor quam, pellentesque eget lorem eu, dignissim fringilla turpis. Ut sollicitudin tortor ante, quis maximus tortor blandit eget. Pellentesque id quam in eros ultrices consectetur. Donec sit amet fringilla massa.Fusce blandit malesuada nunc, vitae fringilla nisi feugiat non. Morbi ut eros vitae augue facilisis placerat et ut velit. Phasellus volutpat et leo eu porttitor. Integer ac nisl mollis, tristique neque non, viverra lectus. Phasellus gravida diam ut varius mattis. Pellentesque mattis suscipit arcu non tincidunt. Nullam tempor accumsan arcu, id blandit metus molestie eget. Vivamus sed purus elit. Vivamus euismod ipsum lorem, quis feugiat est malesuada aVivamus elementum metus vel blandit aliquam. Phasellus interdum turpis sit amet orci molestie aliquet. Cras condimentum elementum mollis. Donec faucibus lectus felis, vitae ornare felis vulputate at. Aenean dolor massa, condimentum in tellus quis, gravida vestibulum dolor. Aenean ut commodo felis. Mauris massa metus, ultrices sed tortor ac, feugiat maximus quam. Suspendisse porttitor lectus nec tortor porttitor dapibus. Sed varius diam quis augue tempus cursus ac condimentum nisi. Ut sed risus at magna lobortis consequat. Aliquam in suscipit enim, elementum euismod turpis. Sed quis vestibulum turpis. Vivamus ac dolor tempor, rhoncus tellus a, dignissim est. Vivamus quis dapibus neque. Sed sapien velit, ultricies a consequat id, pulvinar at tellus.",
    imageSrc:
      "https://pict.sindonews.net/dyn/850/pena/news/2023/11/08/121/1246779/hogers-indonesia-siap-gelar-drag-race-harleydavidson-lai.jpg",
  },
  {
    id: 4,
    name: "DRAG RACE HARLEY DAVIDSON",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum risus lectus, vel ullamcorper libero vehicula et. Integer in tellus aliquam, mollis metus ut, gravida magna. Aenean aliquet a leo et suscipit. Quisque ac sollicitudin velit. Phasellus tempor purus sit amet justo egestas lobortis. Proin dignissim molestie nisl a congue. Sed sit amet varius enim, eu euismod magna. Donec hendrerit venenatis lorem sed euismod. Vestibulum vel sapien viverra, blandit urna vel, mollis dolor. Cras ac nisi sit amet nisi consectetur porttitor eu at sapien. Morbi placerat congue leo, eu tempor tellus dapibus id. Donec vitae nisl convallis, rhoncus lacus nec, pharetra sem. Nunc egestas urna tellus, a egestas massa feugiat faucibus. Cras feugiat felis at gravida consequat. Donec eget vehicula urna, ac consequat dui. Praesent nisi turpis, semper eget velit vel, sollicitudin blandit velit. Proin id enim ac nisi placerat porttitor ac et leo. Etiam mollis sapien quis maximus blandit. Nullam id venenatis tellus. Curabitur euismod a ex at volutpat. Pellentesque tortor diam, ultricies id nulla sit amet, molestie lobortis erat. Phasellus dolor quam, pellentesque eget lorem eu, dignissim fringilla turpis. Ut sollicitudin tortor ante, quis maximus tortor blandit eget. Pellentesque id quam in eros ultrices consectetur. Donec sit amet fringilla massa.Fusce blandit malesuada nunc, vitae fringilla nisi feugiat non. Morbi ut eros vitae augue facilisis placerat et ut velit. Phasellus volutpat et leo eu porttitor. Integer ac nisl mollis, tristique neque non, viverra lectus. Phasellus gravida diam ut varius mattis. Pellentesque mattis suscipit arcu non tincidunt. Nullam tempor accumsan arcu, id blandit metus molestie eget. Vivamus sed purus elit. Vivamus euismod ipsum lorem, quis feugiat est malesuada aVivamus elementum metus vel blandit aliquam. Phasellus interdum turpis sit amet orci molestie aliquet. Cras condimentum elementum mollis. Donec faucibus lectus felis, vitae ornare felis vulputate at. Aenean dolor massa, condimentum in tellus quis, gravida vestibulum dolor. Aenean ut commodo felis. Mauris massa metus, ultrices sed tortor ac, feugiat maximus quam. Suspendisse porttitor lectus nec tortor porttitor dapibus. Sed varius diam quis augue tempus cursus ac condimentum nisi. Ut sed risus at magna lobortis consequat. Aliquam in suscipit enim, elementum euismod turpis. Sed quis vestibulum turpis. Vivamus ac dolor tempor, rhoncus tellus a, dignissim est. Vivamus quis dapibus neque. Sed sapien velit, ultricies a consequat id, pulvinar at tellus.",
    imageSrc:
      "https://pict.sindonews.net/dyn/850/pena/news/2023/11/08/121/1246779/hogers-indonesia-siap-gelar-drag-race-harleydavidson-lai.jpg",
  },
];

export default function Home() {
  const [visiMisi, setVisiMisi] = useState(visiMisiData[0]);
  const [activeTab, setActiveTab] = useState(1);
  const router = useRouter();

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
              <h1 className="text-md font-semibold tracking-widest">SPEED</h1>
              <p className="text-sm font-extralight">
                Don’t let perfection get in the way of process and pace
              </p>
            </div>
            <div className="border-r-[1px] border-r-[#FFF]">
              <h1 className="text-md font-semibold tracking-widest">LEAN</h1>
              <p className="text-sm font-extralight">
                Maximize impact with limited resources
              </p>
            </div>
            <div>
              <h1 className="text-md font-semibold tracking-widest">COURAGE</h1>
              <p className="text-sm font-extralight">
                Take risks and go against the norm
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
            {productData.map((product) => (
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
            {articleData.map((product) => (
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
