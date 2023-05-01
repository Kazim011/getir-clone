import React, { useEffect } from "react";
import { api } from "../utills/api";
import Cookies from "js-cookie";
export default function AdminPanel() {
  const token = Cookies.get("admin");

  return (
    <div className="absolute top-36  ss  h-3/4 shadow-2xl rounded-sm z-10 bg-white"></div>
  );
}
