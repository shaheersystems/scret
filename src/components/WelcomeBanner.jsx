import React, { useState } from "react";

function WelcomeBanner() {
  const [isClosed, setClosed] = useState(false);
  function onClose() {
    setClosed(!isClosed);
  }
  return (
    <div className="w-full h-72 my-5">
      <div className="p-5 h-10 w-full border rounded flex items-center justify-end">
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          {isClosed ? (
            <svg
              width={25}
              height={25}
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 15 6-6 6 6" />
            </svg>
          ) : (
            <svg
              width={25}
              height={25}
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`w-full h-64 bg-white  p-5 rounded space-y-5 ${
          isClosed ? "hidden" : ""
        }`}
      >
        <h1 className="font-title font-black text-5xl">
          Welcome back M. Shaheer!
        </h1>
        <p className="font-code">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium{" "}
          <br />
          eaque aperiam consequuntur?
        </p>
        <button className="font-code border border-black hover:bg-white hover:text-black     px-4 text-sm py-2 bg-black text-white">
          Take full survey
        </button>
      </div>
    </div>
  );
}

export default WelcomeBanner;
