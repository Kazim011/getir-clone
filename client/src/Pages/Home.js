import React from "react";
import Kampanyalar from "../Components/Home/Kampanyalar";
import SliderForm from "../Components/Home/SliderAndForm";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <SliderForm />
      <Kampanyalar />
      <Footer />
    </div>
  );
}
