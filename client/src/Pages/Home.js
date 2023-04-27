import React from "react";
import Kampanyalar from "../Components/Home/Kampanyalar";
import Kategoriler from "../Components/Home/Kategoriler";
import SliderForm from "../Components/Home/SliderAndForm";
import Navbar from "../Components/Navbar/Navbar";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <SliderForm />
      <Kategoriler />
      <Kampanyalar />
    </div>
  );
}
