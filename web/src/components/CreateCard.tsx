import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

export default function CreateCard() {
  return (
    <div className='py-3 flex justify-between items-center'>
      <div>
        <strong className='text-4xl font-extrabold text-gray-900'>All days</strong>
        <span className='text-base text-slate-500 block'>Add new cards of what has been happening</span>
      </div>

      <Dialog.Trigger 
        className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
      >
        <span>Add</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h13M12 5l7 7-7 7" />
          </svg>
      </Dialog.Trigger>
    </div>
  );
}