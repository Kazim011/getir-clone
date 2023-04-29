import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import Cookies from "js-cookie";
import axios from "axios";
export default function AccountData({setAccountCheck,check}) {
  const token = Cookies.get("token");
  useEffect(() => {
    if (token) {
    }
  }, []);
  return (
    <button onClick={()=>setAccountCheck(!check)} className="flex items-center gap-x-2">
      <CgProfile className="text-2xl" />
      Profil
    </button>
  );
}
