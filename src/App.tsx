import React from "react";
import Home from "./pages/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { ProtectedRoute, UserAuthContext } from "./context/protectedRoute";
import { useContext } from "react";
const App = () => {
  const isLogin = useContext(UserAuthContext);
  return (
    // <ProtectedRoute>
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={isLogin ? <HomePage /> : <Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
    // </ProtectedRoute>
  );
};

export default App;
