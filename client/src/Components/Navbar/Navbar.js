import React from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { TfiWorld } from "react-icons/tfi";
import { RiUserAddFill } from "react-icons/ri";

export default function Navbar() {
  return (
    <div className="navbar-bg">
      <div className=" flex w-3/4 m-auto items-center justify-between navlink-color ">
        <div className=" flex gap-x-1   ">
          <NavLink
            className={(isActive) =>
              isActive
                ? "text-yellow-500 font-bold p-3 navlink-bg   mt-2"
                : "navlink-color mt-2 navlink-hover font-bold p-3"
            }
            exact
            to="/"
          >
            getir
          </NavLink>
          <NavLink
            className={(isActive) =>
              "" +
              (isActive
                ? "text-yellow-500 font-bold p-3  mt-2 navlink-bg "
                : "navlink-color mt-2 navlink-hover font-bold p-3")
            }
            to="/getiryemek"
            exact
          >
            getir
            <span className="navlink-color">yemek</span>
          </NavLink>
          <NavLink
            className={(isActive) =>
              "" +
              (isActive
                ? "text-yellow-500 font-bold  p-3  mt-2 navlink-bg"
                : "navlink-color mt-2 navlink-hover font-bold p-3")
            }
            to="/getirbüyük"
            exact
          >
            getir
            <span className="navlink-color">büyük</span>
          </NavLink>
          <NavLink
            className={(isActive) =>
              "" +
              (isActive
                ? "text-yellow-500 font-bold p-3 navlink-bg  mt-2"
                : "navlink-color mt-2 navlink-hover font-bold p-3")
            }
            exact
            to="/getirsu"
          >
            getir<span className="navlink-color">su</span>
          </NavLink>
        </div>
        <div className="flex items-center gap-x-4 mt-1">
          <div className="flex items-center gap-x-1 cursor-pointer">
            <div>
              <TfiWorld className="text-2xl" />
            </div>
            <div>Türkçe(TR)</div>
          </div>
          <div className="flex items-center gap-x-1 cursor-pointer">
            <div>
              <CgProfile className="text-2xl" />
            </div>
            <div>Giriş Yap</div>
          </div>
          <div className="mr-2 flex items-center gap-x-1 cursor-pointer">
            <div>
              <RiUserAddFill className="text-2xl" />
            </div>
            <div>Kayıt Ol</div>
          </div>
        </div>
      </div>
    </div>
  );
}
