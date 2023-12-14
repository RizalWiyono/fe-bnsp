import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/assets/img/Logo/Logo.png";

const Navbar = () => {
  return (
    <div className="bg-black bg-opacity-30 backdrop-blur-xl w-full h-screen px-8 py-10">
      <Link href={'/'}>
        <Image src={Logo} width={60} height={30} alt="Logo" />
      </Link>

      <ul className="mt-10">
        <li className="font-semibold">
          <Link href="/dashboard/users">Pengguna</Link>
        </li>
        <li className="font-semibold mt-3">
          <Link href="/dashboard/product">Produk</Link>
        </li>
        <li className="font-semibold mt-3">
          <Link href="/dashboard/article">Artikel</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
