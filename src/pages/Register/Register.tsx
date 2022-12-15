import React, { ChangeEvent, FormEvent } from "react";
import {
  createUserWithEmailAndPassword,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import { auth, db, storage } from "../../app/firebase/firebase";

import "./style.css";
import { FcAddImage } from "react-icons/fc";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { toast } from "react-toastify";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const initialstate = {
  name: "",
  email: "",
  password: "",
  avatar: null,
};
const Register = () => {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
    avatar: null,
  });
  const [error, setError] = React.useState("");
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const { email, password, avatar, name } = user;
    if (!email || !password || !name) return;
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      let storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, avatar);
      uploadTask.on(
        (err: any) => {
          toast.error(err.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then(async (url) => {
              await updateProfile(res.user, {
                displayName: name,
                photoURL: url,
              });
              await setDoc(doc(db, "user", res.user.uid), {
                uid: res.user.uid,
                name,
                email,
                photoURL: url,
              });
            })
            .then(() => {
              toast.success("acount has been created"), setUser(initialstate);
            })
            .catch((err) => {
              // toast.error("error", err);
            });
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = e.target;
    setUser((pre) => {
      return {
        ...pre,
        [name]: name == "avatar" ? files[0] : value,
      };
    });
  }

  return (
    <div className="wrapper max-w-sm  rounded-md  bg-white/50 p-5 px-8 shadow-md">
      <h2 className="h2 text-center text-3xl">chat App</h2>
      <p className="mt-3 text-center  text-sm">Register</p>
      <form onSubmit={submit} action="" className="space-y-5 p-5">
        <input
          value={user.name}
          onChange={handleChange}
          name="name"
          placeholder="name"
          className="w-full border-b-2 p-2"
          type="text"
        />
        <input
          value={user.email}
          onChange={handleChange}
          name="email"
          placeholder="email"
          className="w-full border-b-2 p-2"
          type="text"
        />
        <input
          value={user.password}
          onChange={handleChange}
          name="password"
          placeholder="password"
          className="w-full border-b-2 p-2"
          type="text"
        />
        <input
          // value={user.avatar}
          onChange={handleChange}
          name="avatar"
          id="file"
          className="file-input-ghost file-input-xs mb-2 hidden w-full max-w-xs text-sm"
          type="file"
        />
        <label
          htmlFor="file"
          className="flex cursor-pointer items-center gap-3 text-4xl "
        >
          <FcAddImage />
          <span className="span text-sm text-gray-400">Add an avatar</span>
        </label>
        {error && <p className="error text-red-500">{error}</p>}
        <button className="w-full bg-blue-300 p-2 text-white">Sign Up</button>
        <p className="text-center text-sm">
          You do have an account?{" "}
          <Link className="text-blue-600 underline " to="/login">
            login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
