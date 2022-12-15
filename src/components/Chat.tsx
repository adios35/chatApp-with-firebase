import Input from "./Input";
import React from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoIosMore, IoMdPersonAdd } from "react-icons/io";
import Messages from "./Messages";

const Chat = () => {
  return (
    <div
      style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
      className="bg relative  w-[70%]   overflow-hidden rounded-r-md bg-blue-300 text-slate-200"
    >
      <div className="navbar absolute left-0 right-0 top-0 flex justify-between bg-blue-600 p-2 shadow-md">
        <div className="friend">elizabeth</div>
        <div className="menu flex flex-row  text-xl [&>*]:text-xl [&>*]:btn-ghost [&>*]:btn ">
          <button>
            <BsFillCameraVideoFill />
          </button>
          <button>
            <IoMdPersonAdd />
          </button>
          <button>
            <IoIosMore />
          </button>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
