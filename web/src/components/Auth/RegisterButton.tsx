import * as Dialog from '@radix-ui/react-dialog';

export default function RegisterButton() {
  return (
    <Dialog.Trigger
      className='py-3 px-4 flex justify-center text-xs font-medium rounded space-x-1 bg-[#5C2C5D] hover:bg-[#49134a] text-white'>

      <span className='text-sm'>Register</span>
    </Dialog.Trigger>
  )
}