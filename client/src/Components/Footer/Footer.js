import React from "react";
import { useState } from "react";
import { AiFillApple } from "react-icons/ai";
import { SiHuawei, SiGoogleplay } from "react-icons/si";
import etbis from "./img/etbis.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
export default function Footer() {
  const handleClick = (e) => {
    if (e.currentTarget.role == check) {
      setCheck(false);
    } else {
      setCheck(e.currentTarget.role);
    }
  };
  const [check, setCheck] = useState(false);
  return (
    <div className="footer justify-between     py-5 max-md:w-full  text-sm  ">
      <div className="bg-white  ">
        <div className="  max-2xl:w-11/12 flex max-md:flex-col m-auto py-10 ">
          <div className="flex-1">
            <div className="text-xl text-blue-800  max-md:mb-0 mb-8">
              <h1>Getir'i indirin!</h1>
            </div>
            <div>
              <a
                href="https://apps.apple.com/tr/app/getir-groceries-in-minutes/id995280265"
                className="mb-3 inline-flex items-center justify-center bg-black color-white border-black-500 border-solid border-2 px-6 py-1/2 rounded-2xl  text-white"
              >
                <AiFillApple className="w-8 h-8" />
                <div>
                  <h1 className="font-bold">App Store'dan </h1>
                  <p>indirin</p>
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=com.getir"
                className="mb-3 inline-flex items-center justify-center bg-black color-white border-black-500 border-solid border-2 px-8 py-1/2 rounded-2xl  text-white"
              >
                <SiGoogleplay className="w-8 h-8" />
                <div>
                  <h1 className="font-bold">Google Play </h1>
                  <p>'DEN ALIN'</p>
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://consumer.huawei.com/tr/community/details/Getir-art%C4%B1k-Huawei-AppGallery%E2%80%99de!/topicId_106781/"
                className="inline-flex items-center justify-center bg-black color-white border-black-500 border-solid border-2 px-7 py-1/2 rounded-2xl  text-white"
              >
                <SiHuawei className="w-8 h-8" />
                <div>
                  <h1 className="font-bold">AppGallery</h1>
                  <p>İLE KEŞFEDİN</p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex-1">
            <div
              onClick={handleClick}
              role="getir"
              className="text-xl text-blue-800 max-md:mb-2 mb-8 flex items-center justify-between max-md:mt-4 "
            >
              <h1>Getir'i keşfedin</h1>
              <div className="border p-1 bg-purple-100 rounded-md max-2xl:hidden max-md:block text-base">
                  <IoIosArrowDown
                  className={`${
                    check == "getir"
                      ? "rotate-180 duration-700"
                      : " rotate-0 duration-700"
                  } max-2xl:hidden max-md:block text-base  `}
                />
              </div>
            </div>
            <div className={`${check == "getir" ? "" : "max-md:hidden"} `}>
              <div>
                <p className="mb-3">Hakkımızda</p>
              </div>
              <div>
                <p className="mb-3">Kariyer</p>
              </div>
              <div>
                <p className="mb-3">Teknoloji Kariyerleri</p>
              </div>
              <div>
                <p className="mb-3">İletişim</p>
              </div>
              <div>
                <p>Sosyal Sorumluluk Projeleri</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div
              onClick={handleClick}
              role="yardım"
              className="text-xl text-blue-800 max-md:mb-2 mb-8 flex items-center justify-between max-md:mt-4"
            >
              <h1>Yardıma mı ihtiyacınız var?</h1>
              <div className="border p-1 bg-purple-100 rounded-md max-2xl:hidden max-md:block text-base">
                <IoIosArrowDown
                  className={`${
                    check == "yardım"
                      ? "rotate-180 duration-700"
                      : " rotate-0 duration-700"
                  } max-2xl:hidden max-md:block text-base  `}
                />
              </div>            </div>
            <div className={`${check == "yardım" ? "" : "max-md:hidden"} `}>
              <div>
                <p className="mb-3">Sıkça Sorulan Sorular</p>
              </div>
              <div>
                <p className="mb-3">Kişisel Verilerin Korunması</p>
              </div>
              <div>
                <p className="mb-3">Gizlilik Politikası</p>
              </div>
              <div>
                <p className="mb-3">Kullanım Koşulları</p>
              </div>
              <div>
                <p>Çerez Politikası</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div
              onClick={handleClick}
              role="ortak"
              className="text-xl text-blue-800 max-md:mb-2 mb-8 max-md:mt-4 flex items-center justify-between"
            >
              <h1>İş Ortağımız Olun</h1>
              <div className="border p-1 bg-purple-100 rounded-md max-2xl:hidden max-md:block text-base">
                <IoIosArrowDown
                  className={`${
                    check == "ortak"
                      ? "rotate-180 duration-700"
                      : " rotate-0 duration-700"
                  }   `}
                />
              </div>            </div>
            <div className={`${check == "ortak" ? "" : "max-md:hidden"} `}>
              <div>
                <p className="mb-3">Bayimiz Olun</p>
              </div>
              <div>
                <p className="mb-3">Deponuzu Kiralayın</p>
              </div>
              <div>
                <p className="mb-3">GetirYemek Restoranı Olun</p>
              </div>
              <div>
                <p className="mb-3">GetirÇarşı İşletmesi Olun</p>
              </div>
              <div>
                <p>Zincir Restoranlar</p>
              </div>
            </div>
          </div>
          <div className="max-md:hidden">
            <div className="flex mt-10 w-1/2 h-auto">
              <img src={etbis} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-between w-11/12 m-auto max-md:flex-col max-md:justify-center max-md:items-center">
        <div className="flex items-center gap-x-2 max-md:flex-col">
          <p className="text-center text-sm text-gray-600 mt-2">© 2023 Getir</p>
          <p className="text-center text-sm text-purple-500 mt-2">
            Bilgi Toplumu Hizmetleri
          </p>
        </div>
        <div className="flex gap-x-4 max-md:flex-col ">
          <div className="flex items-center justify-center text-xl gap-x-4 mt-4">
            <div>
              <BsFacebook />
            </div>
            <div>
              <BsTwitter />
            </div>
            <div>
              <BsInstagram />
            </div>
          </div>
          <div className="flex justify-center items-center mt-4 gap-x-2 text-gray-500  ">
            <div className="flex  items-center gap-x-2 p-2 bg-white rounded-xl border-gray-200 border">
              <TfiWorld className="text-xl text-gray-400" />
              <p>Türkçe(TR)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
