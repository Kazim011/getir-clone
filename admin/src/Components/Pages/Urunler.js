import React from "react";
import UrunlerPanel from "../Admin/UrunlerPanel";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

export default function Urunler() {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-4/5 relative ">
        <Header />
        <div className="">
          <UrunlerPanel />
        </div>
      </div>
    </div>
  );
}
