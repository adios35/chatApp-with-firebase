import React, { useState } from "react";
// import { ReactNode } from "react";

// Define a function that creates the pop-up component

interface props {
  message: string | React.ReactNode;
  actions: () => void;
  title: string | React.ReactNode;
}
const PopUp = ({ message, actions, title }: props) => {
  // Use the useState hook to manage the state of the pop-up
  const [isOpen, setIsOpen] = useState(false);

  // Define a function that shows the pop-up
  const showPopUp = () => setIsOpen(true);

  // Define a function that hides the pop-up
  const hidePopUp = () => {
    setIsOpen(false);
  };

  // Return the pop-up component, which is shown or hidden depending on the isOpen state
  return (
    <div>
      <button
        className="btn-link btn-sm btn text-xs font-normal capitalize "
        onClick={showPopUp}
      >
        {title}
      </button>
      {isOpen && (
        <div className="pop-up-overlay absolute  inset-0 z-[99] grid h-screen w-screen place-items-center bg-black/20">
          <div className="pop-up-content inset-0 grid h-[30vh] w-[400px]  place-items-center rounded-xl bg-white/50 p-3  backdrop-blur-md">
            <p>{message}</p>
            <div className="ctas flex w-full justify-evenly ">
              <button
                className="btn"
                onClick={() => {
                  hidePopUp();
                  actions();
                }}
              >
                Yes
              </button>
              <button className="btn" onClick={hidePopUp}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;
