import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { BsChevronUp, BsChevronDown, BsChevronRight } from "react-icons/bs";

export default function Sidebar() {
  const [kategori, setKategori] = useState([]);
  const [tur, setTur] = useState([]);
  const [check, setCheck] = useState(true);
  const [count, setCount] = useState(0);

  const closeTur = () => {
    setCheck(!check);
  };
  const { id } = useParams();
  const [kontrol, setKontrol] = useState(id);
  useEffect(() => {
    axios
      .get("http://localhost:9000/kategori/kategorial/" + id)
      .then((result) => {
        setKategori(result.data.kategori);
        console.log(result.data);
        setTur(result.data.tur);
      })
      .catch((err) => {});
  }, [id]);

  return (
    <>
      <div className="relative  ">
        <div className="fixed w-2/12 top-36">
          <h1 className="mb-2 mt-4">Kategoriler</h1>
          <div className="bg-white border rounded-md overflow-y-scroll max-h-[700px] sidebar">
            {kategori.map((item) => (
              <Link
                onClick={() => {
                  if (item.kategori_id === kontrol) {
                    setKontrol(false);
                  } else {
                    setKontrol(item.kategori_id);
                  }
                }}
                className=""
                to={`/kategori/${item.kategori_id}`}
              >
                <div className="flex p-2 gap-x-3">
                  <div className="w-7">
                    <img
                      alt=""
                      className="border rounded-md"
                      src={item.kategori_resim}
                    ></img>
                  </div>
                  <div className="font-semibold flex-1">
                    <div className="flex items-center justify-between">
                      <div onClick={() => closeTur()}>{item.kategori_adı}</div>
                      <div
                        className={`${
                          kontrol == item.kategori_id
                            ? " text-purple-700 text-xs transform rotate-180 animate-pulse duration-500"
                            : " text-gray-600 text-xs transform rotate-0 animate-pulse duration-500"
                        }`}
                      >
                        <BsChevronDown />
                      </div>
                    </div>
                    {kontrol == item.kategori_id.toString() && (
                      <div>
                        {tur.map((item, sayac) => (
                          <div className="flex items-center">
                            <ScrollLink
                              onClick={(e) => setCount(e.target.id)}
                              id={sayac}
                              to={item.urun_tur}
                              offset={-170}
                              smooth={true}
                              duration={500}
                              className="font-normal block flex-1"
                            >
                              {item.urun_tur}
                            </ScrollLink>
                            {count == sayac && (
                              <BsChevronRight className=" text-purple-700 text-xs" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
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
