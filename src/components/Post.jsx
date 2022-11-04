import React from "react";
import { Avatar } from "@material-tailwind/react";
import avatar from "../assets/avatar.jpg";
function Post() {
  const date = "20 Aug, 2022";
  return (
    <div className='rounded min-h-fit font-body border my-2 flex flex-col justify-start'>
      <div className=' h-18 border-b w-full flex p-5 items-center justify-between'>
        <div className='flex items-center gap-5'>
          <Avatar src={avatar} alt='avatar' size='sm' variant='circular' />
          <div className='flex flex-col'>
            <span className='text-md font-bold'>Muzerbani Sergu</span>
            <a href='/' className='text-sm text-blue-800'>
              @julianpa
            </a>
          </div>
        </div>
        <div>
          <span className='text-sm font-semibold'>{date}</span>
        </div>
      </div>
      <div className='p-5 min-h-fit w-full flex flex-col gap-4'>
        <h1 className='text-3xl font-bold font-title'>
          What is Docker? The complete story:
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae,
          porro! Fugiat dolorum eligendi soluta culpa illo, magni repellendus,
          expedita voluptates vel maiores quia perspiciatis molestiae omnis....
        </p>
      </div>
      <div className='border-t h-10 w-full  flex items-center px-5 justify-between'>
        <div className='flex items-center gap-3'>
          <button className='p-2 rounded-full hover:bg-gray-100'>
            <svg
              width={20}
              height={20}
              fill='none'
              stroke={"black"}
              strokeLinejoin='round'
              strokeWidth={1}
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M22 8.862a5.95 5.95 0 0 1-1.654 4.13c-2.441 2.531-4.809 5.17-7.34 7.608-.581.55-1.502.53-2.057-.045l-7.295-7.562c-2.205-2.286-2.205-5.976 0-8.261a5.58 5.58 0 0 1 8.08 0l.266.274.265-.274A5.612 5.612 0 0 1 16.305 3c1.52 0 2.973.624 4.04 1.732A5.95 5.95 0 0 1 22 8.862Z' />
            </svg>
          </button>
          <button className='p-2 rounded-full hover:bg-gray-100'>
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
              <path d='M18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' />
              <path d='M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' />
              <path d='M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' />
              <path d='m15.5 6.5-7 4' />
              <path d='m8.5 13.5 7 4' />
            </svg>
          </button>
        </div>
        <div className='flex items-center gap-3'>
          <button className='p-2 rounded-full hover:bg-gray-100'>
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
              <path d='M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-5.918-3.805a2 2 0 0 0-2.164 0L5 21Z' />
            </svg>
          </button>
          <button className='p-2 rounded-full hover:bg-gray-100'>
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
              <path d='m12.25 6-6 6m6 6.5V6v12.5Zm0-12.5 6 6-6-6Z' />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
