import React, { useEffect, useState } from "react";
import { AiOutlineBank } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
import { GoDiffAdded } from "react-icons/go";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../utills/api";
import { setCheck, setKategori } from "../Redux/Action";
import { Link, NavLink, useParams } from "react-router-dom";
import { MdLibraryAdd } from "react-icons/md";
import { BiMessageSquareAdd } from "react-icons/bi";

export default function Navbar() {
  const token = Cookies.get("admin");
  const { kategoriler, check, rand } = useSelector((data) => data);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(api + "/admin/tumurun", {
        headers: {
          Authorization: token,
        },
      })
      .then((r) => dispatch(setKategori(r.data)));
  }, [rand]);
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
            >
              Kategoriler
            </p>
            <div  className="max-h-[600px] overflow-y-scroll">
              {check &&
                kategoriler.map((i, sayac) => (
                  <NavLink
                    activeClassName="font-bold"
                    to={`/kategori/${i.kategori_id}`}
                    key={sayac}
                    className="flex gap-x-1 "
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
        <NavLink
          activeClassName="font-bold"
          to="/addurun"
          className=" flex items-center gap-4 cursor-pointer"
        >
          <div>
            <BiMessageSquareAdd className=" text-3xl text-blue-400" />
          </div>
          <div>
            <p>Ürün Ekle</p>
          </div>
        </NavLink>
        <NavLink
          className="flex items-center gap-4"
          activeClassName="font-bold"
          to="/kategoritur"
        >
          <MdLibraryAdd className="text-3xl text-red-700" />
          <p className="">Kategori&Tur Ekle</p>
        </NavLink>
      </div>
    </div>
  );
}
