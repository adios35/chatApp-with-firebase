import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProtectedRoute } from "./context/protectedRoute";
// import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProtectedRoute>
      <Router>
        <App />
        <ToastContainer />
      </Router>
    </ProtectedRoute>
  </React.StrictMode>
);
