import React, { useEffect, useState } from "react";
import { api } from "../utills/api";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import UrunEdit from "./UrunEditDelete/UrunEdit";
import UrunDelete from "./UrunEditDelete/UrunDelete";
export default function UrunlerPanel() {
  const token = Cookies.get("admin");
  const [urun, setUrun] = useState([]);
  const [type, setType] = useState("");
  const { kategoriler } = useSelector((data) => data);
  const { id } = useParams();
  const { rand } = useSelector((data) => data);
  console.log(rand);

  const handleInputChange = (e) => {
    setType(e.target.value);
  };
  const filteredUrun = urun.filter((i) =>
    i.urun_adı.toLowerCase().includes(type.toLowerCase())
  );

  useEffect(() => {
    axios
      .get(api + "/admin/geturun/" + id, {
        headers: { Authorization: token },
      })
      .then((r) => setUrun(r.data));
  }, [id, rand]);
  return (
    <div>
      <p className="text-center font-bold text-red-700">
        {kategoriler?.find((i) => i.kategori_id == id)?.kategori_adı}
      </p>
      <div className="flex flex-wrap  max-h-[500px] h-[500px] overflow-y-scroll   w-3/4 m-auto kategori-scroll gap-y-3 gap-x-2 mt-8">
        {filteredUrun.length > 0 ? (
          filteredUrun.map((i) => (
            <div className="h-64  relative text-center border rounded-md border-gray-400  ">
              <div className="w-40">
                <img src={i.urun_resim}></img>
              </div>
              <p className="text-red-700 text-sm font-semibold w-40">{i.urun_adı}</p>
              <p className="text-sm text-gray-400">{i.urun_birim}</p>
              <p className="font-semibold  text-gray-500 ">₺{i.urun_fiyat}</p>
              <div className="absolute  top-1 right-8 text-2xl text-blue-600 cursor-pointer">
                <UrunEdit i={i} />
              </div>
              <div className="absolute  top-1 right-7 text-2xl  text-red-600 cursor-pointer">
                <UrunDelete i={i} />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-full text-red-700 font-bold">
            Aradığınız ürün bulunmamaktadır
          </p>
        )}
      </div>
      <div className="w-3/4 m-auto text-center mt-5 ">
        <p className="text-red-700 font-bold">Ürün Filtreleme</p>
        <div className="w-1/2 m-auto">
          <input
            onChange={(e) => {
              handleInputChange(e);
            }}
            className="border-2  border-gray-400 rounded-md w-full"
          ></input>
        </div>
      </div>
    </div>
  );
}
