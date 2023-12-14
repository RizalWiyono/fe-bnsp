import React from "react";
import Modal from "react-modal";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import Swal from "sweetalert2";

import Button from "../Button/Button";

import Logo from "@/assets/img/Logo/Logo.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    background: "#00000091",
    transform: "translate(-50%, -50%)",
  },
};

interface RegisterData {
  full_name: string;
  email: string;
  password: string;
}

const Navbar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isFormLogin, setIsFormLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response: AxiosResponse = await axios.post(
        "http://localhost:3003/login",
        {
          email: email,
          password: password,
          role: "User",
        }
      );
      setIsOpen(false);
      Swal.fire({
        title: "Good job!",
        text: "Login successful",
        icon: "success",
      });
      console.log("Login successful!", response.data);
    } catch (error: any) {
      Swal.fire({
        title: "Oops!",
        text: "Login failed!",
        icon: "error",
      });
      console.error(
        "Registration failed!",
        error.response?.data || error.message
      );
    }
  };

  const handleRegister = async (registerData: RegisterData): Promise<void> => {
    try {
      const response: AxiosResponse = await axios.post(
        "http://localhost:3003/users",
        {
          full_name: fullName,
          email: email,
          password: password,
          role: "User",
        }
      );
      setIsOpen(false);
      Swal.fire({
        title: "Good job!",
        text: "Registration successful",
        icon: "success",
      });
      console.log("Registration successful!", response.data);
    } catch (error: any) {
      Swal.fire({
        title: "Oops!",
        text: "Registration failed!",
        icon: "error",
      });
      console.error(
        "Registration failed!",
        error.response?.data || error.message
      );
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {isFormLogin ? (
          <div className="relative w-[800px] p-4">
            <h1 className="text-white font-extrabold">MASUK</h1>
            <hr className="mt-4" />

            <div className="mt-4">
              <label className="text-white">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-[1px] bg-transparent border-white w-full px-4 py-2 text-white"
              />
            </div>
            <div className="mt-4">
              <label className="text-white">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-[1px] bg-transparent border-white w-full px-4 py-2 text-white"
              />
            </div>
            <div className="mt-8 flex items-center">
              <Button
                onClickAction={handleLogin}
                title="MASUK"
                typeButton="secondary"
              />
              <Link
                href="#"
                onClick={() => setIsFormLogin(false)}
                className="ml-4"
              >
                Register
              </Link>
            </div>
          </div>
        ) : (
          <div className="relative w-[800px] p-4">
            <h1 className="text-white font-extrabold">DAFTAR</h1>
            <hr className="mt-4" />

            <div className="mt-4">
              <label className="text-white">Nama</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="border-[1px] bg-transparent border-white w-full px-4 py-2 text-white"
              />
            </div>
            <div className="mt-4">
              <label className="text-white">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-[1px] bg-transparent border-white w-full px-4 py-2 text-white"
              />
            </div>
            <div className="mt-4">
              <label className="text-white">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-[1px] bg-transparent border-white w-full px-4 py-2 text-white"
              />
            </div>
            <div className="mt-8 flex items-center">
              <Button
                onClickAction={handleRegister}
                title="DAFTAR"
                typeButton="secondary"
              />
              <Link
                href="#"
                onClick={() => setIsFormLogin(true)}
                className="ml-4"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </Modal>

      <nav className="bg-black bg-opacity-30 backdrop-blur-xl fixed py-2 w-full z-20">
        <div className="max-w-7xl mx-auto flex justify-between">
          <Image src={Logo} width={60} height={30} alt="Logo" />
          <ul className="flex items-center gap-4 text-xs font-extrabold">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="#article">ARTIKEL</Link>
            </li>
            <li>
              <Link href="#event">EVENT</Link>
            </li>
            <li>
              <Link href="#gallery">GALERI</Link>
            </li>
            <li>
              <Link href="#testimony">KLIEN KAMI</Link>
            </li>
            <li>
              <Link href="#">
                <Button
                  onClickAction={openModal}
                  title="LOGIN"
                  typeButton="primary"
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
