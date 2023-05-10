import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Cookies from "js-cookie";
import { setAnalistCheck } from "../Redux/Action";
import { useEffect } from "react";
import { api } from "../utills/api";
export default function UrunDetayModal() {
  const token = Cookies.get("admin");

  const { analistCheck } = useSelector((data) => data);
  const [urun, setUrun] = useState([]);

  useEffect(() => {
    axios
      .post(
        api + "/siparisler/detay",
        { id: analistCheck },
        { headers: { Authorization: token } }
      )
      .then((r) => setUrun(r.data));
  }, []);
  const dispatch = useDispatch();
  console.log(analistCheck);
  return (
    <div className="modal  cursor-default  ">
      <div className="modal-content-siparis rounded-md">
        <div className="">
          <div
            onClick={() => {
              dispatch(setAnalistCheck(false));
            }}
            className="flex justify-end p-4 cursor-pointer "
          >
            <AiOutlineCloseCircle className="text-3xl text-red-700" />
          </div>
          <div class="relative max-h-[500px] overflow-y-auto overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 ">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Urun Resim
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Urun Adı
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Urun Fiyatı
                  </th>
                  <th scope="col" class="px-6 py-3 ">
                    Urun Birim
                  </th>
                  <th scope="col" class="px-6 py-3 ">
                    Urun Adedi
                  </th>
                </tr>
              </thead>
              <tbody>
                {urun.map((i) => (
                  <tr class="bg-white border-b ">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  w-20"
                    >
                      <img src={i.urun_resim} />
                    </th>
                    <td class="px-6 py-4">{i.urun_adı}</td>
                    <td class="px-6 py-4 text-red-700 text-sm font-semibold">
                      {i.urun_fiyat}
                    </td>{" "}
                    <td class="px-6 py-4 text-red-700 text-sm font-semibold">
                      {i.urun_birim}
                    </td>
                    <td class="px-6 py-4 text-red-700 text-sm font-semibold">
                      {i.urun_adet}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
