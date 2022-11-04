import React from "react";
import User from "./User";

function SuggestionBar() {
  return (
    <div className='w-80 px-5 border-l h-screen sticky top-0'>
      <div className='h-16 w-full flex items-center'>
        <h1 className='font-title text-2xl'>People you may know</h1>
      </div>
      <div className='py-4'>
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
}

export default SuggestionBar;
