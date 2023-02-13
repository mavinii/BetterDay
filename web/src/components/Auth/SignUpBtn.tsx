import * as Dialog from '@radix-ui/react-dialog';

export default function SingUpBtn() {
  return (
    <Dialog.Trigger
    className='flex items-center justify-center text-xs font-medium rounded px-4 py-1 space-x-1 bg-[#5C2C5D] hover:bg-[#49134a] text-white'>

      <span className='text-sm'>Register</span>
    </Dialog.Trigger>
  )
}