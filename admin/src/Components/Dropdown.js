import React, { useEffect, useState } from "react";
import axios from "axios";
import { api } from "./utills/api";
import { AiOutlineArrowDown } from "react-icons/ai";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setKategoriSil, setTur } from "./Redux/Action";
export default function Dropdown({
  i,
  deger,
  setDeger,
  checks,
  setChecks,
  setDegers,
}) {
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  const { rand } = useSelector((data) => data);
  const token = Cookies.get("admin");
  const { kategoriSil } = useSelector((data) => data);
  useEffect(() => {
    if (kategoriSil) {
      axios
        .post(
          api + "/admin/gettur",
          { kategori_id: kategoriSil },
          { headers: { Authorization: token } }
        )
        .then((r) => {
          dispatch(setTur(r.data));
        });
    }
  }, [deger, kategoriSil, rand]);
  return (
    <div>
      <p
        className="border-2 p-2 text-sm font-semibold flex items-center justify-between"
        onClick={() => setCheck(!check)}
      >
        <div>{deger ? deger : "Bos bırakmayınız"}</div>
        <AiOutlineArrowDown className={`${check ? "rotate-180" : ""}`} />
      </p>
      {check && (
        <div className="max-h-[150px] overflow-y-auto border-2 font-semibold border-gray-300  cursor-pointer">
          {i.map((i) => (
            <div
              className="hover:bg-gray-100"
              id={i.kategori_id}
              onClick={(e) => {
                if(kategoriSil!=i.kategori_id){
                    setDegers(false)
                }
                dispatch(setKategoriSil(i.kategori_id));
                setCheck(false);
                setDeger(i.kategori_adı);
              }}
            >
              <span className="ml-2">{i.kategori_adı}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
