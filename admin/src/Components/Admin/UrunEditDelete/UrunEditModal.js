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
      <div className="modal-content">
        <div className="flex flex-col">
          <label>Ürün Resmi</label>
          <input
            onChange={(e) => handleInputChange(e)}
            name="urun_resim"
            value={urun.urun_resim}
          />
        </div>
        <div className="flex flex-col">
          <label>Ürün İsmi</label>
          <input
            onChange={(e) => handleInputChange(e)}
            name="urun_adı"
            value={urun.urun_adı}
          />
        </div>{" "}
        <div className="flex flex-col">
          <label>Ürün Birimi</label>
          <input
            onChange={(e) => handleInputChange(e)}
            name="urun_birim"
            value={urun.urun_birim}
          />
        </div>{" "}
        <div className="flex flex-col">
          <label>Ürün Fiyatı</label>
          <input
            onChange={(e) => handleInputChange(e)}
            name="urun_fiyat"
            value={urun.urun_fiyat}
          />
        </div>{" "}
        <div>
          <select
            name="kategori_id"
            defaultValue={urun.kategori_id}
            onChange={(e) => handleInputChange(e)}
          >
            {kategoriler.map((i) => (
              <option value={i.kategori_id}>{i.kategori_adı}</option>
            ))}
          </select>
        </div>
        <div>
          <select
            name="tur_id"
            defaultValue={urun.tur_id}
            onChange={(e) => handleInputChange(e)}
          >
            {tur.map((i) => (
              <option value={i.tur_id}>{i.urun_tur}</option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit">Güncelle</button>
          <button onClick={() => dispatch(setEditCheck(false))}>İptal</button>
        </div>
      </div>
    </form>
  );
}
