import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

export default function KategoriTürüEkle() {
  const { kategoriler } = useSelector((data) => data);

  const kategoritur = (data) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  return (
    <form
      onSubmit={handleSubmit(kategoritur)}
      className="flex-1 border-l-2 p-5 "
    >
      <h1 className=" mb-5 text-red-700 font-semibold ">Kategori Türü Ekle</h1>

      <div className=" ">
        <p className="font-semibold text-sm mb-2 ">Kategori</p>
        <select
          defaultValue="1"
          className="p-2  border-gray-400 border rounded-md"
          {...register("kategori_id")}
        >
          {kategoriler?.map((i) => (
            <option value={i.kategori_id}>{i.kategori_adı}</option>
          ))}
        </select>
        <div className="mt-3">
          <p className="text-sm font-semibold">Kategori Türü</p>
          <input
            {...register("urun_tur")}
            className="border p-2 border-gray-400 rounded-md mt-2"
          />
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="border p-2 rounded-md font-semibold text-sm bg-gray-200 text-red-700"
          >
            Kategori Türü Ekle
          </button>
        </div>
      </div>
    </form>
  );
}
