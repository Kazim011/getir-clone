import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { setRand } from "../Redux/Action";
import { api } from "../utills/api";
import axios from "axios";

export default function KategoriTurSil() {
  const token = Cookies.get("admin");
  const [del, setDel] = useState({});
  const [tur, setTur] = useState({});
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { kategoriler } = useSelector((data) => data);
  console.log(del);

  console.log(data);

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .post(
        `${api}/kategori/deletekategori`,
        { kategori_id: del.kategori_id },
        { headers: { Authorization: token } }
      )
      .then((res) => dispatch(setRand()));
  };

  useEffect(() => {
    axios
      .post(
        `${api}/admin/gettur`,
        { kategori_id: tur.kategori_id },
        { headers: { Authorization: token } }
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [tur.kategori_id]);

  return (
    <div className="flex flex-col mt-24 w-1/2 border shadow-xl bg-gray-100  m-auto ">
      <h1 className="text-center font-bold text-red-700 my-8">
        Kategori İşlemleri
      </h1>
      <div className="flex ">
        <form
          onSubmit={handleDelete}
          className="flex-1 p-5 flex  flex-col w-1/2 "
        >
          <h1 className="text-red-700 font-semibold mb-5 ">Kategori Sil</h1>
          <div className="flex flex-col">
            <p className="text-sm font-semibold">Kategori adı</p>
            <select
              defaultValue={kategoriler[0]?.kategori_id}
              name="kategori_id"
              className="p-2  border-gray-400 border rounded-md mt-3"
              onChange={(e) =>
                setDel({ ...del, [e.target.name]: e.target.value })
              }
            >
              {kategoriler.map((i) => (
                <option value={i.kategori_id}>{i.kategori_adı}</option>
              ))}
            </select>
            <button
              type="submit"
              className="border p-2 rounded-md font-semibold text-sm bg-gray-200 text-red-700 mt-3"
            >
              Sil
            </button>
          </div>
        </form>
        <form name="kategoritur" className="flex-1 border-l-2 p-5 ">
          <div>
            <h1 className=" mb-5 text-red-700 font-semibold ">
              Kategori Türü Sil
            </h1>
            <div className="flex flex-col">
              <p className="text-sm font-semibold">Kategori adı</p>
              <select
                defaultValue={kategoriler[0]?.kategori_id}
                name="kategori_id"
                className="p-2  border-gray-400 border rounded-md mt-3"
                onChange={(e) =>
                  setTur({ ...tur, [e.target.name]: e.target.value })
                }
              >
                {kategoriler.map((i) => (
                  <option value={i.kategori_id}>{i.kategori_adı}</option>
                ))}
              </select>
              <select>
                {data.map((i) => (
                  <option value={i.tur_id}>{i.tur_adı}</option>
                ))}
              </select>
              <button
                type="submit"
                className="border p-2 rounded-md font-semibold text-sm bg-gray-200 text-red-700 mt-3"
              >
                Sil
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
