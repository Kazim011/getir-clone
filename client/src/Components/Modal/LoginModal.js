import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { setCheckLogin, setCheckRegister } from "../../Redux/Actions";
import { useForm } from "react-hook-form";
import axios from "axios";
import { api } from "../../Utills/Utills";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
function LoginModal() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post(api + "/userAuth/login", data)
      .then((r) => {
        Cookies.set("token", r.data.token);
        history.go(0);
      })
      .catch((err) => console.log(err));
  };
  const dispatch = useDispatch();
  const { login } = useSelector((data) => data);

  return (
    <div>
      <button
        className="flex gap-x-2 items-center "
        onClick={() => {
          dispatch(setCheckLogin(true));
          document.body.style.overflow = "hidden"; // body scrollunu kapat
        }}
      >
        <VscAccount className="text-2xl text-white" />
        <span>Giriş Yap</span>
      </button>

      {login && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="modal cursor-default"
        >
          <div className="modal-content">
            <div className="w-10/12 m-auto">
              <div className="flex items-center justify-between  text-bold">
                <h2 className="text-purple font-semibold flex-1 text-center mt-9 mb-5">
                  Giriş yap veya kayıt ol
                </h2>
                <div
                  onClick={() => {
                    dispatch(setCheckLogin(false));
                    document.body.style.overflow = "unset";
                  }}
                  className="p-1 border rounded-md cursor-pointer  bg-gray-100"
                >
                  <IoClose className="text-lg  text-black" />
                </div>
              </div>
              <div>
                <input
                  {...register("user_telefon", {
                    required: "Lütfen telefon numaranızı giriniz.",
                    minLength: {
                      value: 10,
                      message: "Telefon numarası en az 10 karakter olmalı.",
                    },
                  })}
                  className="w-full p-3 mt-8 outline-none border-2 rounded-md mb-3"
                  placeholder="Telefon Numarası"
                />
              </div>
              {errors.user_telefon && (
                <p className=" text-red-600">{errors.user_telefon.message}</p>
              )}
              {errors.user_telefon == "minLength" && (
                <p className=" text-red-600">{errors.user_telefon.message}</p>
              )}

              <div className="bg-yellow-400 rounded-lg">
                <button className="w-full p-3 text-purple ">
                  Telefon Numarası ile devam et
                </button>
              </div>
              <p className="text-xs mb-10 text-gray-400 mt-2 ">
                Kişisel verilerinize dair Aydınlatma metni için{" "}
                <a className="text-purple underline cursor-pointer">
                  tıklayınız
                </a>
              </p>
            </div>
            <p className="bg-gray-100 p-4 text-center text-sm text-gray-400 font-normal">
              Hala kayıt olmadınız mı?{" "}
              <button
                onClick={() => {
                  dispatch(setCheckLogin(false));
                  dispatch(setCheckRegister(true));
                }}
                className="text-purple"
              >
                Kayıt Ol
              </button>
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginModal;
