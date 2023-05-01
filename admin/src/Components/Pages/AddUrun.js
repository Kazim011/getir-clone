import React from "react";
import AddUrunPanel from "../Admin/AddUrunPanel";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const AddUrun = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-4/5 relative ">
        <Header />
        <div className="">
          <AddUrunPanel />
        </div>
      </div>
    </div>
  );
};

export default AddUrun;
