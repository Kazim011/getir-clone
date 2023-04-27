import React from "react";
import Kampanyalar from "../Components/Home/Kampanyalar";
import Kategoriler from "../Components/Home/Kategoriler";
import SliderForm from "../Components/Home/SliderAndForm";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <SliderForm />
      <Kategoriler />
      <Kampanyalar />
      <Footer />
    </div>
  );
}
