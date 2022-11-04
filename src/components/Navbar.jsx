import React from "react";

function Navbar() {
  return (
    <div className="h-16 border-b w-full bg-white flex px-5 justify-end gap-7 items-center">
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <svg
          width={22}
          height={22}
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 12v-2a5 5 0 0 0-5-5H8a5 5 0 0 0 0 10h4" />
          <path d="M20.124 19.119 22 21m-1.876-1.881a3 3 0 1 0-4.248-4.237 3 3 0 0 0 4.248 4.237Z" />
        </svg>
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <svg
          width={22}
          height={22}
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 8.4c0-1.697-.632-3.325-1.757-4.525C15.117 2.675 13.59 2 12 2c-1.591 0-3.117.674-4.243 1.875C6.632 5.075 6 6.703 6 8.4 6 15.867 3 18 3 18h18s-3-2.133-3-9.6Z" />
          <path d="M13.73 21a1.999 1.999 0 0 1-3.46 0" />
        </svg>
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <svg
          width={22}
          height={22}
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="m19.622 10.395-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.657L2 11v2l2.401.655L5.516 16.3 4 18l2 2 1.791-1.46 2.606 1.072L11 22h2l.604-2.387 2.651-1.098C16.697 18.831 18 20 18 20l2-2-1.484-1.75 1.098-2.652 2.386-.62V11l-2.378-.605Z" />
        </svg>
      </button>
    </div>
  );
}

export default Navbar;
