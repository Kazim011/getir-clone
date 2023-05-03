import React, { useEffect } from "react";
import { api } from "../utills/api";
import Cookies from "js-cookie";
export default function AdminPanel() {
  const token = Cookies.get("admin");

  return <div className=""></div>;
}
