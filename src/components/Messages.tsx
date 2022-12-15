import React from "react";
import Message from "./Message";
import "./style.css";

const Messages = () => {
  return (
    <div className="messages-wrapper   h-full overflow-y-scroll p-4">
      <div className="messages my-16 flex flex-col  gap-3">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  );
};

export default Messages;
