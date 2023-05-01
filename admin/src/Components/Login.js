import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { api } from "./utills/api";
import Cookies from "js-cookie";
export default function Login() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    axios.post(api + "/auth/login", data).then((r) => {
      Cookies.set("admin", r.data.token);
      history.push("/");
    });
  };

  return (
    <form
      className="login bg-blue-700 h-screen pt-32 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="bg-purple-600 opacity-90 rounded-md p-8 h-3/5 w-1/4 m-auto flex flex-col gap-4">
        <div className="text-white font-bold text-2xl pt-5">Giriş Sayfası</div>
        <div className="flex flex-col">
          <label className="text-white font-semibold text-lg">Email</label>
          <input
            placeholder="Kullanıcı Adı"
            {...register("email", { required: "Bu alan zorunludur." })}
            className="p-3 rounded-sm outline-none font-bold"
          />
          <div>{errors.email && <div>{errors.email.message}</div>}</div>
        </div>
        <div className="flex flex-col">
          <label className="text-white font-semibold text-lg">Şifre</label>
          <input
            type="password"
            placeholder="Şifre"
            className="p-3 rounded-sm outline-none font-bold"
            {...register("password", {
              required: "Bu alan zorunludur.",
              minLength: { value: 4, message: "Minimum 4 karakter olmalıdır." },
            })}
          />
          <div>{errors.password && <div>{errors.password.message}</div>}</div>
        </div>
        <Link to="/register">Hesabınız yok mu ?</Link>
        <div className="text-center mt-4">
          <button
            type="submit"
            className="text-black font-bold p-3 w-1/2 border-2 bg-white"
          >
            Giriş Yap
          </button>
        </div>
      </div>
    </form>
  );
}
