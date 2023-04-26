import React from "react";
import { AiFillApple } from "react-icons/ai";
import { SiHuawei, SiGoogleplay } from "react-icons/si";
import etbis from "./img/etbis.png";

export default function Footer() {
  return (
    <div className="footer flex justify-around">
      <div className="">
        <div className="text-2xl text-blue-800 mb-8">
          <h1>Getir'i indirin!</h1>
        </div>
        <div>
          <a
            href="https://apps.apple.com/tr/app/getir-groceries-in-minutes/id995280265"
            className="mb-3 inline-flex items-center justify-center bg-black color-white border-black-500 border-solid border-2 px-6 py-1 rounded-2xl  text-white"
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
            className="mb-3 inline-flex items-center justify-center bg-black color-white border-black-500 border-solid border-2 px-8 py-1 rounded-2xl  text-white"
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
            className="inline-flex items-center justify-center bg-black color-white border-black-500 border-solid border-2 px-7 py-1 rounded-2xl  text-white"
          >
            <SiHuawei className="w-8 h-8" />
            <div>
              <h1 className="font-bold">AppGallery</h1>
              <p>İLE KEŞFEDİN</p>
            </div>
          </a>
        </div>
      </div>
      <div className="">
        <div className="text-2xl text-blue-800 mb-8">
          <h1>Getir'i keşfedin</h1>
        </div>
        <div>
          <p className="mb-5">Hakkımızda</p>
        </div>
        <div>
          <p className="mb-5">Kariyer</p>
        </div>
        <div>
          <p className="mb-5">Teknoloji Kariyerleri</p>
        </div>
        <div>
          <p className="mb-5">İletişim</p>
        </div>
        <div>
          <p>Sosyal Sorumluluk Projeleri</p>
        </div>
      </div>
      <div className="">
        <div className="text-2xl text-blue-800 mb-8">
          <h1>Yardıma mı ihtiyacınız var?</h1>
        </div>
        <div>
          <p className="mb-5">Sıkça Sorulan Sorular</p>
        </div>
        <div>
          <p className="mb-5">Kişisel Verilerin Korunması</p>
        </div>
        <div>
          <p className="mb-5">Gizlilik Politikası</p>
        </div>
        <div>
          <p className="mb-5">Kullanım Koşulları</p>
        </div>
        <div>
          <p>Çerez Politikası</p>
        </div>
      </div>
      <div>
        <div className="text-2xl text-blue-800 mb-8">
          <h1>İş Ortağımız Olun</h1>
        </div>
        <div>
          <p className="mb-5">Bayimiz Olun</p>
        </div>
        <div>
          <p className="mb-5">Deponuzu Kiralayın</p>
        </div>
        <div>
          <p className="mb-5">GetirYemek Restoranı Olun</p>
        </div>
        <div>
          <p className="mb-5">GetirÇarşı İşletmesi Olun</p>
        </div>
        <div>
          <p>Zincir Restoranlar</p>
        </div>
      </div>
      <div>
        <div className="flex mt-10 w-1/2 h-auto">
          <img src={etbis} />
        </div>
      </div>
    </div>
  );
}
