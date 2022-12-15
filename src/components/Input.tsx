import React from "react";
import { CiImageOn } from "react-icons/ci";
import { BsPaperclip } from "react-icons/bs";
const Input = () => {
  return (
    <div className="absolute bottom-0 right-0 left-0 flex w-full ">
      <input
        placeholder="tulis pesan"
        type="text"
        className="chat w-full  p-3 text-slate-500 focus:outline-none"
      />
      <div className="action flex w-[30%] items-center justify-evenly bg-white/50 drop-shadow-lg backdrop-blur-md">
        <button className=" text-3xl ">
          <BsPaperclip />
        </button>
        <input type="file" name="" id="file" className="hidden" />
        <label htmlFor="file" className="group  cursor-pointer text-4xl">
          <CiImageOn />
        </label>
        <button className="btn-info btn-sm btn text-white ">send</button>
      </div>
    </div>
  );
};

export default Input;
