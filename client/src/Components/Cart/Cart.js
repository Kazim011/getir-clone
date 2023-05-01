import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setRand, setSepet, setTotal } from "../../Redux/Actions";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { api } from "../../Utills/Utills";
import SepetButton from "../Sepet/SepetButton";
import { useHistory } from "react-router-dom";

export default function CartComponent() {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = Cookies.get("token");
  const { rand, sepet, total } = useSelector((data) => data);
  const handleResetCart = () => {
    axios
      .get(api + "/cart/resetcart", { headers: { Authorization: token } })
      .then((r) => dispatch(setRand()))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get(api + "/cart/getcart", { headers: { Authorization: token } })
      .then((r) => {
        dispatch(setSepet(r.data.data));
        dispatch(setTotal(r.data.total));
      });
  }, [rand]);
  useEffect(() => {
    if (sepet.length === 0) {
      history.push("/kategori/1");
    }
  }, [sepet]);
  return (
    <div className="pt-32 w-2/4 m-auto flex gap-x-5">
      <div className="w-9/12">
        <div className="flex justify-between text-purple-900 mb-5">
          <p className="text-sm font-semibold">Sepetim</p>
          <div
            onClick={() => handleResetCart()}
            className="flex items-center gap-x-1 cursor-pointer "
          >
            <BsTrash className="text-xl" />
            <p className="text-sm font-semibold">Sepeti Temizle</p>
          </div>
        </div>
        <div className="p-4 bg-white flex flex-col gap-y-5 divide-y-2 divide-gray-100 rounded-lg shadow-md">
          {sepet.map((i) => (
            <div className=" flex py-3 gap-x-4 items-center justify-between">
              <div className="flex gap-x-3 ">
                <div className="w-[4.2rem] border border-gray-100 rounded-lg ">
                  <img src={i.urun_resim}></img>
                </div>
                <div className="flex flex-col ">
                  <p className="flex-1 text-purple-900 font-semibold">
                    ₺{i.urun_fiyat}
                  </p>
                  <div>
                    <p className="font-semibold text-sm">{i.urun_adı}</p>
                    <p className="text-gray-400 text-sm">{i.urun_birim}</p>
                  </div>
                </div>
              </div>
              <div>
                <SepetButton i={i} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-3/12">
        <p className="font-semibold text-sm mb-5">Adres</p>
        <div className="flex gap-x-2 bg-white p-3 rounded-lg shadow-md  ">
          <HiOutlineLocationMarker className="text-5xl text-purple-900 " />
          <p>
            Kemalpaşa, Namık Kemal Cd. No:67 34204 Bağcılar/İstanbul, Türkiye
          </p>
        </div>
        <p className="mt-4 mb-2 font-semibold text-sm">Sepet Toplamı</p>
        <div className="bg-white rounded-lg shadow-md p-5 flex items-center">
          <p className="flex-1 text-sm font-semibold text-gray-600">
            Sepet Tutarı
          </p>
          <p className="text-gray-500 text-sm font-semibold">
            ₺{total?.toFixed(2)}
          </p>
        </div>
        <button className="w-full py-3  text-white bg-purple-800 text-sm font-semibold mt-5 rounded-lg ">
          Ödemeye Geç
        </button>
      </div>
    </div>
  );
}
