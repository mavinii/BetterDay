import * as Dialog from '@radix-ui/react-dialog';
import { MdControlPoint } from 'react-icons/md';

export default function CreateCard() {
  return (
    <div className='py-3 flex justify-between items-center'>
      <div>
        <strong className='text-4xl font-extrabold text-gray-900'>All days</strong>
        <span className='text-base text-slate-500 block'>Add new cards of what has been happening</span>
      </div>

      <Dialog.Trigger
        className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 bg-[#5C2C5D] hover:bg-[#49134a] text-white' >
          <span className='text-sm'>Add</span>
          <MdControlPoint className='text-2xl' />
      </Dialog.Trigger>
    </div>
  );
}