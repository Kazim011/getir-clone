import React, { useEffect, useState } from "react";
import { AiOutlineBank } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../utills/api";
import { setCheck, setKategori } from "../Redux/Action";
import { NavLink, useParams } from "react-router-dom";

export default function Navbar() {
  const token = Cookies.get("admin");
  const { kategoriler, check } = useSelector((data) => data);
  const dispatch = useDispatch();
  const { id } = useParams();
  const handleClickClose = (e) => {
    console.log(e.currentTarget.role);
  };
  useEffect(() => {
  
    axios
      .get(api + "/admin/tumurun", {
        headers: {
          Authorization: token,
        },
      })
      .then((r) => dispatch(setKategori(r.data)));
  }, []);
  return (
    <div className="w-1/5 h-screen shadow-2xl pl-8 ">
      <div className="flex flex-col gap-6 mt-7">
        <div className="flex text-3xl items-center  h-40 ">
          <div className="">
            <AiOutlineBank />
          </div>
          <div className="pl-4">INTERBANK</div>
        </div>
        <div className="flex cursor-pointer ">
          <div className="">
            <FaProductHunt className="text-3xl" />
          </div>
          <div className="pl-4 font-medium">
            <p
              onClick={() => {
                dispatch(setCheck(!check));
                localStorage.setItem("check", !check);
              }}
              role="ss"
            >
              Kategoriler
            </p>
            {check &&
              kategoriler.map((i, sayac) => (
                <NavLink
                  activeClassName="font-bold"
                  to={`/kategori/${i.kategori_id}`}
                  key={sayac}
                  className="flex gap-x-1"
                >
                  <div className="w-8">
                    <img src={i.kategori_resim}></img>
                  </div>
                  <p>{i.kategori_adı}</p>
                </NavLink>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
