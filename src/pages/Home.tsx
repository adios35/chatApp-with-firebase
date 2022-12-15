import React from "react";
import HomePage from "./HomePage/HomePage";
import Login from "./Login/Login";
import Register from "./Register/Register";

import { Outlet } from "react-router-dom";
import { UserAuthContext } from "../context/protectedRoute";
// import { isUserLogIn } from "../context/protectedRoute";
// import { UserAuthContext } from "../context/protectedRoute";
const Home = () => {
  // const user = isUserLogIn();
  const context = React.useContext(UserAuthContext);
  console.log(context);

  return (
    <div className="grid-col-2 grid h-screen w-screen place-items-center bg-gradient-to-br from-cyan-400 to-violet-300">
      <Outlet />
    </div>
  );
};

export default Home;
