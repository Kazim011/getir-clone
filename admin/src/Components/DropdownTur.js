import React, { useEffect, useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { api } from "./utills/api";
import Cookies from "js-cookie";
import { setRand } from "./Redux/Action";
export default function DropdownTur({ check, setCheck, deger, setDeger }) {
  const { tur } = useSelector((data) => data);
  const [id, setİd] = useState(false);
  const token = Cookies.get("admin");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    axios
      .post(
        api + "/admin/deletetur",
        { tur_id: id },
        { headers: { Authorization: token } }
      )
      .then((r) => {
        dispatch(setRand());
        setDeger(false);
      });
  };
  return (
    <div>
      <p
        className="border p-2 font-semibold text-sm flex items-center justify-between"
        onClick={() => setCheck(!check)}
      >
        <div>{deger ? deger : "Bos bırakmayınız"}</div>
        <AiOutlineArrowDown className={`${check ? "rotate-180" : ""}`} />
      </p>
      {check && (
        <div className="max-h-[150px] overflow-y-auto border-2 font-semibold border-gray-300  cursor-pointer">
          {tur?.map((i) => (
            <div
              className="hover:bg-gray-100"
              id={i.tur_id}
              onClick={(e) => {
                setCheck(false);
                setDeger(i.urun_tur);
                setİd(e.target.id);
              }}
            >
              <span className="ml-2">{i.urun_tur}</span>
            </div>
          ))}
        </div>
      )}
      <div className="w-1/2 m-auto mt-3">
        <button
          onClick={handleSubmit}
          className="bg-red-500 w-full text-center p-2 rounded-md text-white"
        >
          Sil
        </button>
      </div>
    </div>
  );
}
