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
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const handleClick = (e) => {
    axios
      .post(
        `${api}/admin/gettur`,
        { kategori_id: e.target.value },
        { headers: { Authorization: token } }
      )
      .then((res) => setTur(res.data))
      .catch((err) => console.log(err));
  };

  const getTur = (e) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`${api}/admin/tumurun`, { headers: { Authorization: token } })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="absolute top-36  ss  h-3/4 shadow-2xl rounded-sm z-10 bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className=" border-2" {...register("urun_adı")}></input>
        <input className=" border-2" {...register("urun_resim")}></input>
        <input className=" border-2" {...register("urun_birim")}></input>
        <input className=" border-2" {...register("urun_fiyat")}></input>
        <select {...register("kategori_id")} onChange={handleClick}>
          {data.map((i) => (
            <option value={i.kategori_id}>{i.kategori_adı}</option>
          ))}
        </select>
        <select {...register("urun_tur")}>
          {tur.map((i) => (
            <option>{i.urun_tur}</option>
          ))}
        </select>
        <input type="submit"></input>
      </form>
    </div>
  );
}
