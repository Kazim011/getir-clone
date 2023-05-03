import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import { api } from "../utills/api";
import Cookies from "js-cookie";
import { setRand } from "../Redux/Action";
export default function KategoriTurEkle() {
  const token = Cookies.get("admin");
  const dispatch = useDispatch();
  const { kategoriler } = useSelector((data) => data);
  const onSubmit = (data, e) => {
    if (e.target.name == "kategori") {
      axios
        .post(
          api + "/kategori/addkategori",
          {
            kategori_adı: data.kategori_adı,
            kategori_resim: data.kategori_resim,
          },
          { headers: { Authorization: token } }
        )
        .then((r) => dispatch(setRand()));
    } else if (e.target.name == "kategoritur") {
      console.log(data.kategori_id);
      axios
        .post(
          api + "/admin/addtur",
          {
            kategori_id: data.kategori_id,
            urun_tur: data.urun_tur,
          },
          { headers: { Authorization: token } }
        )
        .then((r) => console.log(r));
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  return (
    <div className="flex flex-col mt-24 w-1/2 border shadow-xl bg-gray-100  m-auto ">
      <h1 className="text-center font-bold text-red-700 my-8">
        Kategori İşlemleri
      </h1>
      <div className="flex ">
        <form
          name="kategori"
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 p-5 flex  flex-col w-1/2 "
        >
          <h1 className="text-red-700 font-semibold mb-5 ">Kategori Ekle</h1>
          <p className="text-sm font-semibold">Kategori İsmi</p>
          <div className="mt-2 flex-1">
            <div>
              <input
                {...register("kategori_adı")}
                className="p-2 border rounded-md border-gray-400"
              />
            </div>
            <p className="text-sm font-semibold mt-2 mb-2">Kategori Resmi</p>

            <div>
              <input
                {...register("kategori_resim")}
                className="p-2 border rounded-md border-gray-400"
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="border p-2 text-red-700 bg-gray-200 rounded-md font-semibold text-sm "
            >
              Kategori Ekle
            </button>
          </div>
        </form>
        <form
          onSubmit={handleSubmit(onSubmit)}
          name="kategoritur"
          className="flex-1 border-l-2 p-5 "
        >
          <h1 className=" mb-5 text-red-700 font-semibold ">
            Kategori Türü Ekle
          </h1>

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
      </div>
    </div>
  );
}
