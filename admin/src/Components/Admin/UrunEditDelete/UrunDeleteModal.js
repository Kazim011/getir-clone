import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteCheck, setRand } from "../../Redux/Action";
import { api } from "../../utills/api";
import axios from "axios";
import Cookies from "js-cookie";
export default function UrunDeleteModal() {
  const dispatch = useDispatch();
  const { urun } = useSelector((data) => data);
  const token = Cookies.get("admin");
  return (
    <div className="modal  cursor-default  ">
      <div className="modal-content rounded-md">
        <div className="">
          <p className="text-center mt-5">
            <span className="font-semibold mr-2 text-red-700">{urun?.urun_adı}</span>
            ürününü silmek istediğinize emin misiniz ?
          </p>
          <div className="flex justify-end gap-x-3 w-3/4 m-auto my-10">
            <button
              onClick={() => {
                axios
                  .post(
                    api + "/urun/delurun",
                    { urun_id: urun.urun_id },
                    { headers: { Authorization: token } }
                  )
                  .then((r) => {
                    dispatch(setDeleteCheck(false));
                    dispatch(setRand());
                  });
              }}
              className="border text-white font-semibold p-2 w-20 rounded-md bg-red-700"
            >
              Evet
            </button>
            <button
              onClick={() => {
                dispatch(setDeleteCheck(false));
              }}
              className="border text-white font-semibold p-2 w-20 rounded-md bg-blue-400"
            >
              Hayır
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
