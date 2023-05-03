import React from "react";
import AdminPanel from "../Admin/AdminPanel";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex">
      <div className="">
        <AdminPanel />
      </div>
    </div>
  );
}
