import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import Login from "../Modal/LoginModal";
import RegisterModal from "../Modal/RegisterModal";

export default function Navbar() {
  return (
    <div className=" relative">
      <div className="w-full m-auto fixed  z-20  navbar-bg ">
        <div className=" flex w-3/4 m-auto navlink-color  justify-between ">
          <div className=" flex gap-x-1   ">
            <NavLink
              className={(isActive) =>
                isActive
                  ? "text-yellow-500 font-bold p-3 navlink-bg   mt-2"
                  : "navlink-color mt-2 navlink-hover font-bold p-3"
              }
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
              <Login />
            </div>
            <div className="mr-2 flex items-center gap-x-1 cursor-pointer">
              <div></div>
              <RegisterModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
