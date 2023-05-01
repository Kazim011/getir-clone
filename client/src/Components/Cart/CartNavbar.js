import React from "react";
import { Link } from "react-router-dom";

export default function CartNavBar() {
  return (
    <div className="relative">
      <div className="h-24 aksesuar-bg flex fixed justify-center  w-full  z-10">
        <Link
          to="/kategori/1"
          className="w-2/4 m-auto  text-3xl font-bold text-yellow-400 "
        >
          getir
        </Link>
      </div>
    </div>
  );
}
