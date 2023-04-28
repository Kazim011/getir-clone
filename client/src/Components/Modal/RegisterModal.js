import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiUserAddFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setCheckLogin, setCheckRegister } from "../../Redux/Actions";

function RegisterModal() {
  const dispatch = useDispatch();
  const { register } = useSelector((data) => data);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(setCheckRegister(true));
          document.body.style.overflow = "hidden"; // body scrollunu kapat
        }}
        className="flex gap-x-2 items-center "
      >
        <RiUserAddFill className="text-2xl" />
        <span>Kayıt Ol</span>
      </button>

      {register && (
        <div className="modal cursor-default ">
          <div className="modal-content">
            <div className="w-11/12 m-auto">
              <div className="flex items-center justify-between  text-bold">
                <h2 className="text-purple font-semibold flex-1 text-center mt-9 mb-5">
                  Kayıt Ol
                </h2>
                <div
                  onClick={() => {
                    dispatch(setCheckRegister(false));
                    document.body.style.overflow = "unset";
                  }}
                  className="p-1 border rounded-md cursor-pointer bg-gray-100"
                >
                  <IoClose className="text-lg   text-black" />
                </div>
              </div>
              <div className="mb-2">
                <input
                  className="w-full p-3 text-gray-500 text-sm  outline-none border-2 rounded-md mb-3 hover:border-purple-900 focus:border-purple-900"
                  placeholder="Telefon Numarası"
                />
              </div>
              <div className="mb-2">
                <input
                  className="w-full p-3 text-gray-500 text-sm  outline-none border-2 rounded-md mb-3 hover:border-purple-900 focus:border-purple-900"
                  placeholder="Ad Soyad"
                />
              </div>{" "}
              <div className="">
                <input
                  className="w-full p-3 text-gray-500 text-sm  outline-none border-2 rounded-md mb-3 hover:border-purple-900 focus:border-purple-900"
                  placeholder="E-Posta"
                />
              </div>
              <div className="flex items-center gap-x-3 mb-4 mt-2 ">
                <input
                  type="checkbox"
                  id="checks"
                  className="w-10 h-5 cursor-pointer accent-purple-800"
                />
                <label
                  htmlFor="checks"
                  className="text-gray-400 text-xs cursor-pointer "
                >
                  Getir'in bana özel kampanya, tanıtım ve fırsatlarından
                  haberdar olmak istiyorum.
                </label>
              </div>
              <p className="text-xs mb-16 text-gray-400 mt-2  cursor-text ">
                Kişisel verilerinize dair Aydınlatma metni için{" "}
                <a className="text-purple underline cursor-pointer">
                  tıklayınız
                </a>
                Üye olmakla,{" "}
                <a className="text-purple underline cursor-pointer">
                  Kullanım Koşulları{" "}
                </a>
                hükümlerini kabul etmektesiniz.
              </p>
              <div className="bg-purple-800 rounded-lg aksesuar-bg text-white font-medium">
                <button className="w-full p-3   ">Kayıt Ol</button>
              </div>
            </div>
            <p className="text-center text-gray-500 p-4 bg-gray-100 mt-4">
              Getir'e üyeyseniz{" "}
              <button
                onClick={() => {
                  dispatch(setCheckRegister(false));
                  dispatch(setCheckLogin(true));
                }}
                className="text-purple "
              >
                Giriş yap
              </button>{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterModal;
