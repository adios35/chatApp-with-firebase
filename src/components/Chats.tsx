import React from "react";

const Chats = () => {
  return (
    <div className="chats">
      <div className="acc flex cursor-pointer gap-2 p-2 hover:bg-blue-500">
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
      <div className="acc flex cursor-pointer gap-2  p-2 hover:bg-blue-500">
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
  );
};

export default Chats;
