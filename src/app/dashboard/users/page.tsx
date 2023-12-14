"use client";

import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Swal from "sweetalert2";
import Button from "@/components/Button/Button";

import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response: AxiosResponse = await axios.get(
        "http://localhost:3003/users"
      );
      console.log(response.data.motorbikes);
      setUsers(response.data.motorbikes);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleButtonClick = (id: number) => {
    axios
      .delete(`http://localhost:3003/users/${id}`)
      .then((response) => {
        Swal.fire({
          title: "Good job!",
          text: "Delete users successful",
          icon: "success",
        });
        console.log("User deleted successfully!", response.data);
      })
      .catch((error) => {
        Swal.fire({
          title: "Oops!",
          text: "Delete users failed!",
          icon: "error",
        });
        console.error(
          "Failed to delete user!",
          error.response?.data || error.message
        );
      });
  };

  return (
    <main>
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-4 py-10 px-10">
          <h1 className="text-3xl font-black tracking-widest">
            <i>PENGGUNA</i>
          </h1>
          <p className="text-md font-extralight mt-4">
            Pengguna yang terdaftar pada sistem.
          </p>

          <div className="mt-10">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="border-[1px] border-white">Nama</th>
                  <th className="border-[1px] border-white">Email</th>
                  <th className="border-[1px] border-white">Role</th>
                  <th className="border-[1px] border-white">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="border border-white p-3">
                      {user.full_name}
                    </td>
                    <td className="border border-white p-3">{user.email}</td>
                    <td className="border border-white p-3">{user.role}</td>
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
          </div>
        </div>
      </div>
    </main>
  );
}
