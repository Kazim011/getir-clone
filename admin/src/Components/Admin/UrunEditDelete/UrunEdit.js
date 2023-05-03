import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setUrun, setEditCheck } from "../../Redux/Action";
export default function UrunEdit({ i }) {
  const dispatch = useDispatch();
  return (
    <div className="">
      <AiFillEdit
        onClick={() => {
          dispatch(setUrun(i));
          dispatch(setEditCheck(true));
        }}
      />
    </div>
  );
}
