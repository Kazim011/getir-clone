import React from "react";
import phoneLanding from "../../images/phoneLanding.png";
import data from "./data";

export default function Kampanyalar() {
  return (
    <div className=" m-auto max-2xl:w-11/12 max-md:w-full">
      <h6 className="font-semibold mb-2 max-md:hidden">Kampanyalar</h6>
      <div className="kampanya flex items-center justify-between relative overflow-hidden bg-indigo-700 z-1 mt-6 max-md:mb-0 max-xl:mb-6 rounded-lg">
        <div className="flex flex-col items-start h-full justify-center ml-12 text-white">
          <h2 className="font-bold text-2xl mb-3">Getir'i indirin!</h2>
          <span className="text-base font-semibold">
            İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.
          </span>
          <div className="flex gap-3 pt-8 max-md:flex-col ">
            <img
              className="w-full"
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt="App Store"
            />
            <img
              className="w-full"
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt="Google Play"
            />
            <img
              className="w-full"
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt="Huawei AppGallery"
            />
          </div>
        </div>
        <div className=" ml-36 max-md:hidden">
          <img
            className="w-full h-full object-contain"
            src={phoneLanding}
            alt="Phone Landing"
          />
        </div>
      </div>
      <div className="flex  max-lg:w-full max-md:flex-wrap gap-3  max-md:mt-0 max-2xl:mt-10  max-md:p-5">
        {data.map((item) => (
          <div className="w-1/3   shadow-md text-center p-3 max-md:w-full bg-white ">
            <div>
              <img className="w-40 m-auto" src={item.img} alt="" />
            </div>
            <p className=" text-lg text-indigo-700 font-semibold mt-6">
              {item.baslik}
            </p>
            <p className=" text-zinc-600 mt-2 mb-5 font-normal">
              {item.desription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
