import { signOut } from "firebase/auth";
import React from "react";
import { BiChat } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { auth } from "../app/firebase/firebase";
import PopUp from "../modals/PopUp";

const NavBar = () => {
  const navigate = useNavigate();
  function logOut() {
    signOut(auth), navigate("login");
  }
  return (
    <nav className="flex justify-between  bg-blue-500 p-2">
      <div className="logo flex items-center text-blue-200 ">
        <BiChat className="text-xl" />
        chatApp
      </div>
      <div className="account flex items-center ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg"
          alt=""
          className="h-8 w-8 rounded-full object-cover"
        />
        <PopUp title="log out" actions={logOut} message="are you sure?" />
      </div>
    </nav>
  );
};

export default NavBar;
