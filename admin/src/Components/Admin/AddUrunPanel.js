import React, { useEffect } from "react";
import { api } from "../utills/api";
import Cookies from "js-cookie";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddUrunPanel() {
  const [data, setData] = useState([]);
  const [tur, setTur] = useState([]);
  const token = Cookies.get("admin");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    axios
      .post(api + "/urun/addurun", data, {
        headers: { Authorization: token },
      })
      .then((r) => console.log(r));
  };

  const handleClick = (e) => {
    axios
      .post(
        `${api}/admin/gettur`,
        { kategori_id: e.target.value },
        { headers: { Authorization: token } }
      )
      .then((res) =>
        setTur([
          { urun_tur: "Lütfen Boş Bırakmayınız", id: 999999 },
          ...res.data,
        ])
      )
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get(`${api}/admin/tumurun`, { headers: { Authorization: token } })
      .then((res) => {
        setData([
          { kategori_adı: "Lütfen Boş Bırakmayınız", id: 999999 },
          ...res.data,
        ]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <form className="w-1/2 m-auto" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl text-center text-red-700 font-semibold mt-7">
          Ürün Ekle
        </h1>
        <div className="flex flex-col mt-3">
          <label className="font-semibold text-base">Ürün Adı</label>
          <input
            className=" border-2 py-2 px-1 border-gray-300 rounded-md"
            {...register("urun_adı")}
          ></input>
        </div>
        <div className="flex flex-col ">
          <label className="font-semibold text-base">Urun Resmi</label>
          <input
            className=" border-2 py-2 px-1 border-gray-300 rounded-md"
            {...register("urun_resim")}
          ></input>
        </div>
        <div className="flex flex-col ">
          <label className="font-semibold text-base">Ürün Birimi</label>
          <input
            className=" border-2 py-2 px-1 border-gray-300 rounded-md"
            {...register("urun_birim")}
          ></input>
        </div>
        <div className="flex flex-col ">
          <label className="font-semibold text-base">Ürün Fiyatı</label>
          <input
            className=" border-2 py-2 px-1 border-gray-300 rounded-md"
            {...register("urun_fiyat")}
          ></input>
        </div>
        <div className="flex flex-col mt-2   ">
          <label className="font-semibold">Kategoriler</label>
          <select
            className=" outline-gray-700 py-3 px-1 border border-gray-500 rounded-md"
            {...register("kategori_id")}
            onChange={handleClick}
          >
            {data.map((i) => (
              <option value={i.kategori_id}>{i.kategori_adı}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col mt-2   outline-none">
          <label>Kategori Türü</label>
          <select
            className="outline-none border py-3 px-1 border-gray-500 rounded-md "
            {...register("tur_id")}
          >
            {tur.length > 0 ? (
              tur.map((i) => (
                <option value={i.tur_id} className="hover:text-red-700">
                  {i.urun_tur}
                </option>
              ))
            ) : (
              <option>Lütfen alanı boş bırakmayınız</option>
            )}
          </select>
        </div>
        <div className="bg-gray-100 p-3 text-center mt-3 font-semibold text-sm rounded-sm">
          <button type="submit" className="w-full">
            Ürün Ekle
          </button>
        </div>
      </form>
    </div>
  );
}
