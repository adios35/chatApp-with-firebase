import React from "react";

const Message = () => {
  const isOwner = false;
  return (
    <div className={`${!isOwner && "self-end"} text-white`}>
      <div
        className={`message mb-2 flex ${!isOwner && "flex-row-reverse"}  gap-3`}
      >
        <div className="author flex flex-col ">
          <img
            src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/pfHjtessY9slk0V5K4wZhlCeRyV.jpg"
            alt=""
            className="h-[50px] w-[50px] rounded-full object-cover"
          />
          <span className="text-sm  text-slate-500">just now</span>
        </div>
        <div
          className={`messageInfo flex flex-col ${
            !isOwner && "items-end"
          } space-y-3 pt-2`}
        >
          {!isOwner ? (
            <p
              className={`max-w-fit rounded-b-xl rounded-tl-xl  bg-green-400 p-2`}
            >
              hello
            </p>
          ) : (
            <p
              className={`max-w-fit rounded-b-xl rounded-tr-xl  bg-blue-500 p-2`}
            >
              hello
            </p>
          )}
          <img
            width={200}
            src="https://kbu-cdn.com/dk/wp-content/uploads/kebab-sosis.jpg"
            alt=""
            className="imgUpload"
          />
        </div>
      </div>
    </div>
  );
};

export default Message;
