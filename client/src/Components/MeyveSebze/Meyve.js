import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Meyve() {
  const myDivRef = useRef(null);
  useEffect(() => {
    myDivRef.current.scrollIntoView();
  }, []);
  const { Meyve } = useSelector((data) => data);
  return (
    <div id="" className="">
      <div className="mt-4"></div>
      <div id="meyve" ref={myDivRef}>
        Meyve
      </div>
      <div className="flex mt-2 flex-wrap ">
        {Meyve.map((i) => (
          <div className="text-center bg-white p-4 relative w-1/4">
            <div className="">
              <img  className="w-full" src={`${i.urun_resim}`}></img>
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
