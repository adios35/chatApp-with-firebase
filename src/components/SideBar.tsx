import React from "react";
import Chats from "./Chats";
import NavBar from "./NavBar";
import Search from "./Search";

const SideBar = () => {
  return (
    <div className="w-[30%] overflow-hidden rounded-l-md  bg-blue-400">
      <NavBar />
      <Search />
      <Chats />
    </div>
  );
};

export default SideBar;
