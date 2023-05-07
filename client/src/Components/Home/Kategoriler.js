import React, { useEffect, useState } from "react";
import { api } from "../../Utills/Utills";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Kategoriler() {
  const [kategori, setKategori] = useState([]); //backendin kategorisine istek atılıp kategoriler alındı ve page de gösterildi .
  useEffect(() => {
    axios
      .get(`${api}/kategori/getkategori`)
      .then((result) => {
        setKategori(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="max-md:w-full  xl:m-auto max-2xl:w-11/12 m-auto  ">
      <div className="text-sm font-semibold mt-8 max-lg:ml-5 ">Kategoriler</div>
      <div className=" flex flex-row flex-wrap max-lg:gap-0  max-xl:gap-3 ">
        {kategori.map((i) => (
          <Link
            to={`/kategori/${i.kategori_id}`}
            className="  hover:bg-gray-100 hover:rounded-md sm:w-1/4 max-sm:w-1/4 md:w-1/5 lg:w-[100px] max-2xl:w-[140px]  p-1  "
          >
            <div className="mb-3 ">
              <img
              alt="#"
                className="w-12 m-auto border rounded-md  "
                src={i.kategori_resim}
              ></img>
            </div>
            <div className="font-semibold  text-gray-500 max-lg:text-center  hover:text-purple-500">
              {i.kategori_adı}
            </div>
            <div></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
