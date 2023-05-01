import axios from "axios";
import React from "react";
import { BsTrash } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
import { setRand } from "../../Redux/Actions";
import { useDispatch } from "react-redux";
import { HiMinusSm } from "react-icons/hi";
import Cookies from "js-cookie";
import { api } from "../../Utills/Utills";
export default function SepetButton({ i }) {
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  const handleSepetIslem = (e) => {
    if (e.currentTarget.role === "azalt") {
      axios
        .post(
          api + "/cart/removecart",
          { urun_id: i.urun_id },
          {
            headers: { Authorization: token },
          }
        )
        .then((r) => dispatch(setRand()));
    } else {
      axios
        .post(
          api + "/cart/addcart",
          { urun_id: i.urun_id },
          { headers: { Authorization: token } }
        )
        .then((r) => {
          dispatch(setRand());
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="flex items-center justify-center  text-purple-900">
      <div
        role="azalt"
        onClick={(e) => handleSepetIslem(e)}
        className="border p-2 rounded-md shadow-md cursor-pointer "
      >
        {i.urun_adet < 2 ? <BsTrash /> : <HiMinusSm />}
      </div>
      <p className="border px-2 py-1 bg-purple-900 text-white ">
        {i.urun_adet}
      </p>
      <div
        role="arttir"
        onClick={(e) => handleSepetIslem(e)}
        className="border p-2 shadow-md cursor-pointer"
      >
        <IoIosAdd className=" " />
      </div>
    </div>
  );
}
