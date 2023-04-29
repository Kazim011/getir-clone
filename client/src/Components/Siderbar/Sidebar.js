import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Sidebar() {
  const [kategori, setKategori] = useState([]);
  const [tur, setTur] = useState([]);
  const [check, setCheck] = useState(true);
  const closeTur = () => {
    setCheck(!check);
  };
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:9000/kategori/kategorial/" + id)
      .then((result) => {
        setKategori(result.data.kategori);
        setTur(result.data.tur);
      })
      .catch((err) => {});
  }, [id]);

  return (
    <>
      <div className="relative  ">
        <div className=" fixed w-2/12 top-36 ">
          <h1 className="mb-2 mt-4">Kategoriler</h1>
          <div className="bg-white border rounded-md overflow-y-scroll max-h-[700px] ">
            {kategori.map((i) => (
              <Link className="" to={`/kategori/${i.kategori_id}`}>
                <div className="flex  p-2 gap-x-3 ">
                  <div onClick={() => closeTur()} className="w-7">
                    <img
                      alt=""
                      className="border rounded-md"
                      src={i.kategori_resim}
                    ></img>
                  </div>
                  <div className="font-semibold">
                    <div onClick={() => closeTur()}>{i.kategori_adı}</div>
                    {check &&
                      id === i.kategori_id.toString() &&
                      tur.map((i) => (
                        <ScrollLink
                          to={i.urun_tur}
                          offset={-170}
                          smooth={true}
                          duration={500}
                          className="font-normal block"
                        >
                          {i.urun_tur}
                        </ScrollLink>
                      ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
