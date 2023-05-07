import React, { useEffect } from "react";
import axios from "axios";
import { api } from "../utills/api";
import Cookies from "js-cookie";
import { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import UrunDetayModal from "./UrunDetayModal";
import { useDispatch, useSelector } from "react-redux";
import { setAnalistCheck, setRand } from "../Redux/Action";
export default function Siparisler() {
  const [siparis, setSiparis] = useState([]);
  const dispatch = useDispatch();
  const token = Cookies.get("token");
  const { rand } = useSelector((data) => data);
  const changeStatus = (i) => {
    axios
      .post(
        api + "/siparisler/onay",
        { id: i.siparis_id },
        { headers: { Authorization: token } }
      )
      .then((r) => {
        console.log(r);
        dispatch(setRand());
      });
  };
  useEffect(() => {
    axios
      .get(api + "/admin/siparisler", { headers: { Authorization: token } })
      .then((r) => {
        setSiparis(r.data);
        console.log(r.data);
      });
  }, [rand]);
  return (
    <div class="relative max-h-[728px] overflow-auto shadow-md sm:rounded-lg">
      <table class="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs   text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3 ">
              Müşteri İsmi
            </th>
            <th scope="col" class="px-6 py-3">
              Sipariş Tarihi
            </th>
            <th scope="col" class="px-6 py-3">
              Sipariş Adresi
            </th>
            <th scope="col" class="px-6 py-3 ">
              Sipariş Toplamı
            </th>
            <th scope="col" class="px-6 py-3">
              Sipariş Detayı
            </th>
            <th scope="col" class="px-6 py-3">
              Sipariş Durumu
            </th>
          </tr>
        </thead>
        <tbody className="mt-10 pt-10">
          {siparis.map((i) => (
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {i.user_name}
              </th>
              <td class="px-6 py-4">
                {i.siparis_tarih.split(" ").slice(0, 5).join(" ")}
              </td>
              <td class="px-6 py-4">{i.siparis_adres}</td>
              <td class="px-6 py-4 text-red-700 text-sm font-semibold">
                ₺{i.toplam.total.toFixed(2)}
              </td>
              <td class="px-6 py-4">
                <button
                  onClick={() => {
                    dispatch(setAnalistCheck(i.siparis_id));
                  }}
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Detay
                </button>
              </td>
              <td class="px-6 py-4 ">
                <button
                  onClick={() => changeStatus(i)}
                  class="font-medium text-blue-600  dark:text-blue-500 hover:underline flex items-center gap-x-2"
                >
                  <p>Onayla</p>
                  <AiOutlineCheckCircle className="text-2xl text-green-600" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
