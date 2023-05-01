import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFullscreen } from "react-icons/bs";
import { MdOutlineLocalPostOffice } from "react-icons/md";
export default function Header() {
  return (
    <div className="back h-44  p-5">
      <div className="flex items-center justify-between  ">
        <div className="flex text-white gap-3 ">
          <BsFullscreen className="text-xl mr-4" />
          <AiOutlineSearch className="text-2xl" />
        </div>
        <div className="flex text-white gap-3 mr-7 items-center ">
          <MdOutlineLocalPostOffice className="text-3xl mr-3" />
          <div>
            <img
              className="rounded-full  w-8"
              src="https://media.licdn.com/dms/image/D4D03AQHf4NWcMQD9hQ/profile-displayphoto-shrink_100_100/0/1679304703570?e=1687392000&v=beta&t=QdSDfVlXoYaJpnfiYbE9xPg6I-YLRpjVq9ySU1sH1KQ"
            ></img>
          </div>
        </div>
      </div>
      <div className="mt-10 flex text-white justify-between">
        <div className="text-2xl font-bold">INTERBANK</div>
        <div className="flex text-lg gap-5">
          <div>Member</div>
          <div>Member Portal</div>
        </div>
      </div>
    </div>
  );
}
