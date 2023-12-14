"use client";

import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Swal from "sweetalert2";
import Button from "@/components/Button/Button";

import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response: AxiosResponse = await axios.get(
        "http://localhost:3003/articles"
      );
      console.log(response.data.motorbikes);
      setUsers(response.data.motorbikes);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleButtonClick = (id: number) => {
    axios
      .delete(`http://localhost:3003/article/${id}`)
      .then((response) => {
        fetchProducts();
        Swal.fire({
          title: "Good job!",
          text: "Article delete successful",
          icon: "success",
        });
        console.log("Article deleted successfully!", response.data);
      })
      .catch((error) => {
        Swal.fire({
          title: "Oops!",
          text: "Article delete failed!",
          icon: "error",
        });
        console.error(
          "Failed to delete product!",
          error.response?.data || error.message
        );
      });
  };

  const onAdd = async () => {
    try {
      const response: AxiosResponse = await axios.post(
        "http://localhost:3003/add/article",
        {
          title: productName,
          description: description,
        }
      );
      fetchProducts();
      Swal.fire({
        title: "Good job!",
        text: "Article add successful",
        icon: "success",
      });
      console.log("Article add successful!", response.data);
    } catch (error: any) {
      Swal.fire({
        title: "Oops!",
        text: "Article add failed!",
        icon: "error",
      });
      console.error(
        "Article add failed!",
        error.response?.data || error.message
      );
    }
  };

  return (
    <main>
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-4 py-10 px-10">
          <h1 className="text-3xl font-black tracking-widest">
            <i>ARTIKEL</i>
          </h1>
          <p className="text-md font-extralight mt-4">
            Artikel yang terdaftar pada sistem.
          </p>

          <div className="mt-10">
            <div className="grid grid-cols-6 gap-10">
              <table className="w-full col-span-4">
                <thead>
                  <tr>
                    <th className="border-[1px] border-white">Judul Artikel</th>
                    <th className="border-[1px] border-white">Deskripsi</th>
                    <th className="border-[1px] border-white">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="border border-white p-3">{user.title}</td>
                      <td className="border border-white p-3">
                        {user.description}
                      </td>
                      <td className="border border-white p-3">
                        <Button
                          onClickAction={() => handleButtonClick(user.id)}
                          title="HAPUS"
                          typeButton="secondary"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="col-span-2">
                <div>
                  <label className="text-white">Judul Artikel</label>
                  <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="border-[1px] bg-transparent border-white w-full px-4 py-2 text-white"
                  />
                </div>
                <div className="mt-4">
                  <label className="text-white">Deskripsi</label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border-[1px] bg-transparent border-white w-full px-4 py-2 text-white"
                  />
                </div>
                <div className="mt-4">
                  <Button
                    onClickAction={onAdd}
                    title="TAMBAH"
                    typeButton="primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
