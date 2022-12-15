import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import PopUp from "../../modals/PopUp";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../app/firebase/firebase";
import { toast } from "react-toastify";

const initialstate = {
  email: "",
  password: "",
};

const Login = () => {
  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();
  const [user, setUser] = React.useState(initialstate);

  function handleInputs(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setUser((pre) => ({
      ...pre,
      [name]: value,
    }));
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!user.email || !user.password) {
      setError("please fill the required input");
      return;
    }
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then(() => toast.success("user has log in"), navigate("/")!)
      .catch((err) => {
        setError(err.message);
      });
  }
  return (
    <div className="wrapper max-w-sm  rounded-md  bg-white/50 p-5 px-8  shadow-md">
      <h2 className="h2 text-center text-3xl text-slate-600">chat App</h2>
      <p className="mt-3 text-center text-sm  text-slate-600">Login</p>
      <form onSubmit={handleSubmit} className="space-y-5 p-5">
        <input
          name="email"
          onChange={handleInputs}
          placeholder="email"
          className="input input-md w-full  border-b-2 p-2 text-sm text-slate-600 focus:outline-none"
          type="text"
        />
        <input
          name="password"
          onChange={handleInputs}
          placeholder="password"
          className="input input-md w-full  border-b-2 p-2 text-sm text-slate-600 focus:outline-none"
          type="password"
        />
        {error && (
          <p className="error text-center text-sm text-red-400">{error}</p>
        )}
        <button className="w-full bg-blue-300 p-2 text-white ">Sign Up</button>
      </form>
      <p className="text-center text-sm text-gray-700">
        dont have an account?{" "}
        <Link className="text-blue-500 underline" to="/register">
          sign up
        </Link>
      </p>
      {/* <p className="text-center text-sm">--or login with--</p>
      <div className="login-alternative mx-auto my-3 flex justify-center gap-5">
        <button className=" btn-ghost btn flex gap-3 font-normal capitalize text-slate-600">
          <FcGoogle /> <span>google</span>
        </button>
        <button className=" btn-ghost btn flex gap-3 font-normal capitalize text-slate-600">
          <AiFillFacebook className="text-blue-600" />
          <span>facebook</span>
        </button>
      </div> */}
    </div>
  );
};

export default Login;
