import React, { useState } from "react";

function TabBar() {
  const [isActive, setActive] = useState(1);
  function handle1() {
    setActive(1);
  }
  function handle2() {
    setActive(2);
  }
  const activeClass = "font-black border-black";
  return (
    <div className="h-12 w-full font-code border-b flex gap-3  items-center">
      <button
        onClick={handle1}
        className={`px-4 py-3 border-b ${
          isActive === 1 ? activeClass : "border-transparent"
        }`}
      >
        Following
      </button>
      <button
        onClick={handle2}
        className={`px-4 py-3 border-b ${
          isActive === 2 ? activeClass : "border-transparent"
        }`}
      >
        Trending
      </button>
    </div>
  );
}

export default TabBar;
