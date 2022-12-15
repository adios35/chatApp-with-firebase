import React from "react";
import Split from "react-split";
import Chat from "../../components/Chat";
import SideBar from "../../components/SideBar";
import Login from "../Login/Login";

const HomePage = () => {
  return (
    // <div className="container flex h-[90vh] max-w-4xl rounded-xl bg-white/50 ">
    <Split
      sizes={[25, 75]}
      minSize={[200, 400]}
      expandToMin={false}
      gutterSize={8}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={0.5}
      direction="horizontal"
      cursor="col-resize"
      className="flex h-[90vh] shadow-xl  sm:min-w-[80%]  xl:min-w-[70%]"
      maxSize={[400]}
    >
      <SideBar />
      <Chat />
    </Split>
    // </div>
  );
};

export default HomePage;
