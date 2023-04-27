import React from "react";
import { useSelector } from "react-redux";

export default function Sebze() {
  const { Sebze } = useSelector((data) => data);
  console.log(Sebze);
  return (
    <div className="mt-5">
      <label className="" id="sebze" htmlFor="">Sebze</label>
      <div ></div>
      <div className="flex flex-wrap mt-2 ">
        {Sebze.map((i) => (
          <div className="text-center bg-white p-4 relative w-1/4">
            <div className="w-full">
              <img className="" src={`${i.urun_resim}`}></img>
            </div>
            <div className="text-purple font-medium">₺{i.urun_fiyat}</div>
            <div className="font-medium">{i.urun_adı}</div>
            <div className="text-gray-400">{i.urun_birim}</div>
            <div className="absolute top-2 right-2 border text-purple px-3 py-1 shadow-md rounded-lg text-lg">
              +
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
