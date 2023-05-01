import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSepet, setTotal } from "../../Redux/Actions";
import { api } from "../../Utills/Utills";
import SepetButton from "./SepetButton";

export default function Sepet() {
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  const { rand, total, sepet } = useSelector((data) => data);
  useEffect(() => {
    axios
      .get(api + "/cart/getcart", { headers: { Authorization: token } })
      .then((r) => {
        dispatch(setSepet(r.data.data));
        dispatch(setTotal(r.data.total));
      });
  }, [rand]);

  return (
    <div className="relative ">
      <div className="fixed mt-5 w-64 ">
        <div className="">
          <div>Sepetim</div>
        </div>
        <div className=" overflow-y-scroll max-h-[330px] mt-1  bg-white   border-2 border-yellow-400 rounded-xl">
          {sepet.length < 1 ? (
            <div className="flex flex-col items-center justify-center h-80">
              <div className="mb-8">
                <img
                  alt="#"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iODYiIHZpZXdCb3g9IjAgMCA3MiA4NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0wLjUgMjVINzAuNzc1NlY4NS4yMzQ3SDAuNVYyNVoiIGZpbGw9IiNEQkRCRkYiLz4KPHBhdGggZD0iTTIzLjA4MzggMC4zMzMwMDhINDcuOTg3TDUyLjk3NTQgNS4zODlWMjUuNDMxNkw0Ny41NzgxIDI1LjQxNzRWNS4zNzgzNEgyMy41MjQ3VjI1LjQxNzRMMTguMDI3OCAyNS40MzE2VjUuMzc4MzRMMjMuMDgzOCAwLjMzMzAwOFoiIGZpbGw9IiNEQkRCRkYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI3MSIgaGVpZ2h0PSI4NiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                ></img>
              </div>
              <p className="text-purple font-semibold text-center">
                Sepetiniz şu an boş
              </p>
              <p className="text-gray-400 text-sm text-center">
                Sipariş vermek için sepetinize ürün ekleyin
              </p>
            </div>
          ) : (
            <div className="px-5 divide-y-2 divide-gray-100 ">
              {sepet.map((i) => (
                <div className="flex py-3  items-center ">
                  <div className="w-2/3">
                    <p className="text-gray-400">{i.urun_adı}</p>
                    <p className="text-purple-800 font-semibold">
                      ₺{i.urun_fiyat}
                    </p>
                  </div>
                  <div className="w-1/3">
                    <SepetButton i={i} />
                  </div>
                </div>
              ))}
              <div className="flex py-5 items-center">
                <Link
                  className="w-2/3 py-3 bg-purple-900 text-center border-2 text-white border-purple-900 font-semibold rounded-l-lg"
                  to="/cart"
                >
                  Sepete Git
                </Link>
                <p className="w-1/3 text-center rounded-r-lg border-2 border-purple-900 py-3 text-purple-900 font-semibold">
                  ₺{total.toFixed(2)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
