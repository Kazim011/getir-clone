import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditCheck, setRand, setUrun } from "../../Redux/Action";
import axios from "axios";
import { api } from "../../utills/api";
import Cookies from "js-cookie";
export default function UrunEditModal() {
  const { urun, kategoriler } = useSelector((state) => state);
  const [tur, setTur] = useState([]);
  const dispatch = useDispatch();
  const token = Cookies.get("admin");
  const handleInputChange = (e) => {
    dispatch(setUrun({ ...urun, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        api + "/urun/updateurun",
        { id: urun.urun_id, urun },
        { headers: { Authorization: token } }
      )
      .then((r) => {
        dispatch(setRand());
        dispatch(setEditCheck(false));
      });
  };
  useEffect(() => {
    axios
      .post(
        api + "/admin/gettur",
        { kategori_id: urun.kategori_id },
        { headers: { Authorization: token } }
      )
      .then((r) => setTur(r.data));
  }, [urun.kategori_id]);
  return (
    <form onSubmit={handleSubmit} className="modal">
      <div className="modal-content rounded-md p-5">
        <h1 className="mb-5 text-center font-bold text-xl text-red-700 ">Ürün Güncelle</h1>
        <div className="flex flex-col mb-2">
          <label className="text-sm text-red-700 font-semibold">
            Ürün Resmi
          </label>
          <input
            className="border p-2 border-gray-400 rounded-md"
            onChange={(e) => handleInputChange(e)}
            name="urun_resim"
            value={urun.urun_resim}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label className="text-sm text-red-700 font-semibold">
            Ürün İsmi
          </label>
          <input
            className="border p-2 border-gray-400 rounded-md"
            onChange={(e) => handleInputChange(e)}
            name="urun_adı"
            value={urun.urun_adı}
          />
        </div>{" "}
        <div className="flex flex-col mb-2">
          <label className="text-sm text-red-700 font-semibold">
            Ürün Birimi
          </label>
          <input
            className="border p-2 border-gray-400 rounded-md"
            onChange={(e) => handleInputChange(e)}
            name="urun_birim"
            value={urun.urun_birim}
          />
        </div>{" "}
        <div className="flex flex-col mb-2">
          <label className="text-sm text-red-700 font-semibold">
            Ürün Fiyatı
          </label>
          <input
            className="border p-2 border-gray-400 rounded-md "
            onChange={(e) => handleInputChange(e)}
            name="urun_fiyat"
            value={urun.urun_fiyat}
          />
        </div>{" "}
        <div className="flex flex-col mt-2">
          <label>Kategori</label>

          <select
            name="kategori_id"
            className="border p-2  border-gray-400 rounded-md text-red-700 font-semibold text-sm"
            defaultValue={urun.kategori_id}
            onChange={(e) => handleInputChange(e)}
          >
            {kategoriler.map((i) => (
              <option value={i.kategori_id}>{i.kategori_adı}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col mt-2">
          <label>Kategori türü</label>
          <select
            name="tur_id"
            defaultValue={urun.tur_id}
            onChange={(e) => handleInputChange(e)}
            className="border p-2  border-gray-400 rounded-md text-red-700 font-semibold text-sm"
          >
            {tur.map((i) => (
              <option value={i.tur_id}>{i.urun_tur}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-end mt-4 gap-x-2">
          <button className="border border-gray-400 bg-blue-500 text-white font-semibold text-sm rounded-md p-2 w-20" type="submit">Güncelle</button>
          <button className="border border-gray-400 bg-red-700 text-white font-semibold text-sm rounded-md p-2 w-20" onClick={() => dispatch(setEditCheck(false))}>İptal</button>
        </div>
      </div>
    </form>
  );
}
