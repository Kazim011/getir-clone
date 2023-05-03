import React from "react";
import { useForm } from "react-hook-form";

export default function KategoriEkle() {
  const onSubmit = (data) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  return (
    <div>
      <form
       // onSubmit={handleSubmit(onSubmit)}
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
    </div>
  );
}
