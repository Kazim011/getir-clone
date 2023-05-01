import React from "react";
import AdminPanel from "../Admin/AdminPanel";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-4/5 relative ">
        <Header />
        <div className="">
          <AdminPanel />
        </div>
      </div>
    </div>
  );
}
