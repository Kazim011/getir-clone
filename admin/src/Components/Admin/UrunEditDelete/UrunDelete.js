import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setDeleteCheck, setUrun } from "../../Redux/Action";
export default function UrunDelete({ i }) {
  const dispatch = useDispatch();
  return (
    <div className="absolute">
      <AiFillDelete
        onClick={() => {
          dispatch(setUrun(i));
          dispatch(setDeleteCheck(true));
        }}
      />
    </div>
  );
}
