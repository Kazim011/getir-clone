import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setCheckLogin, setRand } from "../../Redux/Actions";
import { api } from "../../Utills/Utills";

export default function Urunler() {
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  const [urun, setUrun] = useState({});
  const { id } = useParams();
  const addUruninCart = (e, i) => {
    if (token) {
      axios
        .post(
          api + "/cart/addcart",
          { urun_id: i.urun_id },
          { headers: { Authorization: token } }
        )
        .then((r) => {
          dispatch(setRand());
        })
        .catch((err) => console.log(err));
    } else {
      dispatch(setCheckLogin(true));
    }
  };
  useEffect(() => {
    axios.post("http://localhost:9000/kategori/getkategori/" + id).then((r) => {
      setUrun(r.data);
    });
  }, [id]);

  return (
    <div id="" className="">
      <div className="flex mt-2 flex-wrap ">
        {Object.entries(urun).map(([key, value]) => (
          <div>
            <div className="mt-4"></div>
            <div id={key}>{key}</div>
            <div className="flex flex-wrap">
              {value.map((i) => (
                <div className="text-center bg-white p-4 relative w-1/4">
                  <div className="">
                    <img className="w-full" src={`${i.urun_resim}`}></img>
                  </div>
                  <div className="text-purple font-medium">₺{i.urun_fiyat}</div>
                  <div className="font-medium">{i.urun_adı}</div>
                  <div className="text-gray-400">{i.urun_birim}</div>
                  <button
                    onClick={(e) => {
                      addUruninCart(e, i);
                    }}
                    className="absolute top-2 right-2 border text-purple px-3 py-1 cursor-pointer shadow-md rounded-lg text-lg"
                  >
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
