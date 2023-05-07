import React from "react";

export default function SliderForm() {
  return (
    <div className="slider-bg   md:h-[32rem] max-md:bg-none  ">
      <div className="w-3/4 m-auto pt-9 max-md:w-full ">
        <div className="pt-20 flex justify-between items-center max-sm:flex-col">
          <div className="w-48  max-md:hidden">
            <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"></img>
            <p className="font-bold text-white text-2xl mt-5">
              Dakikalar içinde Kapınızda
            </p>
          </div>
          <div className="bg-white w-96 rounded-lg max-md:flex max-md:w-full ">
            <form className="w-11/12 m-auto">
              <h1 className="mt-5 text-center text-purple font-semibold">
                Giriş Yap veya kayıt ol
              </h1>
              <div className="mt-5">
                <input
                  className="p-2 w-full outline-none border-gray-300 border-2 rounded xl"
                  placeholder="Telefon Numarası"
                />
              </div>
              <div className="mt-5">
                <button className="p-2 w-full bg-yellow-500 rounded-lg text-purple font-semibold mb-5">
                  Telefon Numarası ile devam et
                </button>
              </div>
            </form>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
