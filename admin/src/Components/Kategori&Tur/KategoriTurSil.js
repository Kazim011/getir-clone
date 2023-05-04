import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { setKategori, setKategoriSil, setRand } from "../Redux/Action";
import { api } from "../utills/api";
import axios from "axios";
import Dropdown from "../Dropdown";
import DropdownTur from "../DropdownTur";

export default function KategoriTurSil() {
  const token = Cookies.get("admin");
  const [checks, setChecks] = useState(false);
  const [deger, setDeger] = useState(false);
  const [degers, setDegers] = useState(false);
  const dispatch = useDispatch();
  const { kategoriler, kategoriSil, rand } = useSelector((data) => data);
  const handleClick = () => {
    axios
      .post(
        api + "/kategori/deletekategori",
        { kategori_id: kategoriSil },
        { headers: { Authorization: token } }
      )
      .then((r) => {
        dispatch(setRand());
        setDeger(false);
      });
  };
  return (
    <div className="flex flex-col gap-y-5 justify-between w-1/2 m-auto mt-10">
      <div>
        <h1 className="text-sm font-semibold text-red-700">Kategori Sil</h1>
        <Dropdown
          i={kategoriler}
          setDegers={setDegers}
          deger={deger}
          setDeger={setDeger}
          checks={checks}
          setChecks={setChecks}
        />
        <div className=" w-1/2 m-auto">
          <button
            onClick={handleClick}
            className="mt-3 w-full p-2 rounded-md bg-red-500 text-white"
          >
            Kategori Sil
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-sm font-semibold text-red-700">
          Kategori Türü Sil
        </h1>
        <DropdownTur
          deger={degers}
          setDeger={setDegers}
          check={checks}
          setCheck={setChecks}
        />
      </div>
    </div>
  );
}
