import React from "react";
import "./style.css";

const Search = () => {
  return (
    <div className="w-full">
      <input
        placeholder="find user..."
        type="text"
        className="search w-full border-b-[2px] border-white/20 bg-transparent p-2 text-sm  text-white focus:outline-none"
      />
      <div className="results">
        <div className="acc flex gap-2 p-2">
          <img
            src="https://images.complex.com/complex/images/c_scale,f_auto,q_auto,w_1920/fl_lossy,pg_1/ok26lkxxcptihvwljzaw/girl-in-red?fimg-ssr-default"
            alt=""
            className="h-[50px] w-[50px] rounded-full object-cover"
          />
          <div className="info font-semibold text-white">
            <p>elizabeth</p>
            <span className="latest-chat text-sm font-thin">hey thank you</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
