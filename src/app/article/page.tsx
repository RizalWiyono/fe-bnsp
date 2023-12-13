"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CardArticle from "@/components/Card/CardArticle";

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
  const router = useRouter();

  const handleButtonClick = () => {
    console.log("Tombol ditekan!");
    router.push(`/article/1`);
  };

  return (
    <main>
      <Navbar />
      <section className="merchandise pt-40 py-20" id="merchandise">
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
