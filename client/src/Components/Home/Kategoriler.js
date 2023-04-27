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
  console.log(kategori);
  return (
    <div className="w-3/4 m-auto">
      <div className="text-sm font-semibold mt-8">Kategoriler</div>
      <div className="flex ">
        {kategori.map((i) => (
          <Link  to={`/${i.kategori_adı.replaceAll(" ", "")}/${i.kategori_id}`} className="p-4">
            <div className="mb-3 ">
              <img
                className="w-12 m-auto border rounded-md  "
                src={i.kategori_resim}
              ></img>
            </div>
            <div className="font-semibold text-gray-500">{i.kategori_adı}</div>
            <div></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
