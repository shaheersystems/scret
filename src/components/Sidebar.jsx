import { Tooltip } from "@material-tailwind/react";
import React from "react";

function Sidebar() {
  return (
    <div className="h-screen w-20 border sticky top-0 flex flex-col items-center justify-between py-2">
      <div>
        <a href="/" className="">
          <span className="text-4xl font-black font-serif py-2 px-4 flex items-center justify-center rounded-full hover:bg-gray-50">
            S
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-5">
        <Tooltip content="Feed" placement="right">
          <a
            href="/"
            className="p-2 rounded-full hover:border-white hover:text-green-500 hover:bg-gray-100 transition-all"
          >
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
              <path d="M3 9.5 12 4l9 5.5" />
              <path d="M19 13v6.4a.6.6 0 0 1-.6.6H5.6a.6.6 0 0 1-.6-.6V13" />
            </svg>
          </a>
        </Tooltip>
        <Tooltip content="Favourites" placement="right">
          <a
            href="/"
            className="p-2 rounded-full hover:border-white hover:text-red-500 hover:bg-gray-100 transition-all"
          >
            <svg
              width={25}
              height={25}
              fill="none"
              stroke="#000000"
              strokeLinejoin="round"
              strokeWidth={1}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 8.862a5.95 5.95 0 0 1-1.654 4.13c-2.441 2.531-4.809 5.17-7.34 7.608-.581.55-1.502.53-2.057-.045l-7.295-7.562c-2.205-2.286-2.205-5.976 0-8.261a5.58 5.58 0 0 1 8.08 0l.266.274.265-.274A5.612 5.612 0 0 1 16.305 3c1.52 0 2.973.624 4.04 1.732A5.95 5.95 0 0 1 22 8.862Z" />
            </svg>
          </a>
        </Tooltip>
        <Tooltip content="Bookmarked" placement="right">
          <a
            href="/"
            className="p-2 rounded-full hover:border-white hover:text-purple-500 hover:bg-gray-100 transition-all"
          >
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
              <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-5.918-3.805a2 2 0 0 0-2.164 0L5 21Z" />
            </svg>
          </a>
        </Tooltip>
        <Tooltip content="My Posts" placement="right">
          <a
            href="/"
            className="p-2 rounded-full hover:text-blue-500 hover:bg-gray-100"
          >
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
              <path d="M4 21.4V2.6a.6.6 0 0 1 .6-.6h11.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 20 5.75V21.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6Z" />
              <path
                fill="#000000"
                d="M16 5.4V2.354a.354.354 0 0 1 .604-.25l3.292 3.292a.353.353 0 0 1-.25.604H16.6a.6.6 0 0 1-.6-.6Z"
              />
              <path d="M8 10h8" />
              <path d="M8 18h8" />
              <path d="M8 14h4" />
            </svg>
          </a>
        </Tooltip>
        <hr />
        <Tooltip content="Write" placement="right">
          <a
            href="/"
            className="p-2 rounded-full hover:text-cyan-500 hover:bg-gray-100 transition-all"
          >
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
              <path d="M3 21h18" />
              <path d="m12.222 5.828 4.95 4.95m-4.95-4.95L15.05 3 20 7.95l-2.828 2.828-4.95-4.95Zm0 0-5.607 5.607a1 1 0 0 0-.293.707v4.536h4.536a1 1 0 0 0 .707-.293l5.607-5.607-4.95-4.95Z" />
            </svg>
          </a>
        </Tooltip>
      </div>
      <div>
        <button className="p-2 border rounded-full">
          <svg
            width={30}
            height={30}
            fill="none"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 20v-1a7 7 0 1 1 14 0v1" />
            <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
