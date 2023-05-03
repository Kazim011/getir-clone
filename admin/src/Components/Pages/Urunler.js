import React from "react";
import { useSelector } from "react-redux";
import AddUrun from "../Admin/AddUrunPanel";
import UrunDeleteModal from "../Admin/UrunEditDelete/UrunDeleteModal";
import UrunlerPanel from "../Admin/UrunlerPanel";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

export default function Urunler() {
  return (
    <div className="">
      <UrunlerPanel />
     
    </div>
  );
}
