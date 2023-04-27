import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Meyve from "../Components/MeyveSebze/Meyve";
import Sebze from "../Components/MeyveSebze/Sebze";
import { setMeyve, setSebze } from "../Redux/Actions";
import Navbar from "../Components/Navbar/Navbar";
import Aksesuar from "../Components/MeyveSebze/Aksesuar";
import Sidebar from "../Components/Siderbar/Sidebar";
import Sepet from "../Components/Sepet/Sepet";

export default function MeyveSebze() {
  const dispatch = useDispatch();
  const data = useSelector((data) => data);
  console.log(data.Meyve);
  useEffect(() => {
    axios.post("http://localhost:9000/kategori/getkategori/2").then((r) => {
      dispatch(setMeyve(r.data.meyve));
      dispatch(setSebze(r.data.sebze));
    });
  }, []);
  return (
    <div className="bg-gray-100 ">
      <div className="">
        <Navbar />
        <Aksesuar />
      </div>
      <div className="flex w-3/4 m-auto  pt-36 ">
        <div className="w-1/4  ">
          <Sidebar />
        </div>
        <div className="w-2/4 flex-1 mr-4">
          <Meyve />
          <Sebze  />
        </div>
        <div className="w-1/4">
          <Sepet />
        </div>
      </div>
    </div>
  );
}
