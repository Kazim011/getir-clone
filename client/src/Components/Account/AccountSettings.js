import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { api } from "../../Utills/Utills";
import img from "../../images/no-profile-pic-icon-11.jpg";
export default function AccountSettings() {
  const token = Cookies.get("token");
  const [data, setData] = useState({});
  const history = useHistory();
  useEffect(() => {
    if (token) {
      axios
        .get(api + "/user/getuser", {
          headers: {
            Authorization: token,
          },
        })
        .then((r) => setData(r.data));
    }
  }, []);
  return (
    <div className="absolute bg-white w-64  top-10 text-black">
      <div className="flex items-center p-5 bg-gray-100 gap-x-3">
        <div className=" w-8  ">
          <img className=" " src={img}></img>
        </div>
        <div className="text-sm ">
          <p className="text-black">{data.user_name}</p>
          <p className="font-light">{data.user_telefon}</p>
        </div>
      </div>
      <p className="px-5 py-2 text-gray-500 hover:bg-gray-200 hover:text-purple-800">
        Adreslerim
      </p>
      <p className="px-5 py-2 text-gray-500 hover:bg-gray-200 hover:text-purple-800">
        Favori Ürünlerim
      </p>
      <p className="px-5 py-2 text-gray-500 hover:bg-gray-200 hover:text-purple-800">
        Geçmiş Siparişlerim
      </p>
      <p className="px-5 py-2 text-gray-500 hover:bg-gray-200 hover:text-purple-800">
        Ödeme Yöntemlerim
      </p>
      <p className="px-5 py-2 text-gray-500 hover:bg-gray-200 hover:text-purple-800">
        Fatura Bilgileri
      </p>
      <p className="px-5 py-2 text-gray-500 hover:bg-gray-200 hover:text-purple-800">
        İletişim Tercihlerim
      </p>
      <p
        onClick={() => {
          Cookies.remove("token");
          history.go(0);
        }}
        className="px-5 py-2 text-gray-500 hover:bg-gray-200 hover:text-purple-800"
      >
        Çıkış yap
      </p>
    </div>
  );
}
