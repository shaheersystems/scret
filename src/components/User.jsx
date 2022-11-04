import React from "react";
import avatar from "../assets/avatar.jpg";
import { Avatar } from "@material-tailwind/react";
function User() {
  return (
    <div className='h-16 w-full flex items-center justify-between gap-2'>
      <div className='flex gap-3 items-center '>
        <Avatar src={avatar} alt='avatar' size='sm' variant='circular' />
        <div>
          <h2 className='text-sm font-body'>Muzerbani Sergu</h2>
          <span className='text-sm font-body text-blue-900'>@muzerbani</span>
        </div>
      </div>
      <div>
        <button className='text-sm font-body font-semibold flex items-center'>
          <svg
            width={20}
            height={20}
            fill='none'
            stroke='#000000'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1}
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M12 12v6m-6-6h6-6Zm12 0h-6 6Zm-6 0V6v6Z' />
          </svg>
          <span>Follow</span>
        </button>
      </div>
    </div>
  );
}

export default User;
