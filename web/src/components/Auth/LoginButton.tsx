import * as Dialog from '@radix-ui/react-dialog';

export default function LoginButton() {
  return (
    <Dialog.Trigger
      className="py-2 px-4 bg-transparent text-[#5C2C5D] font-semibold border border-[#5C2C5D] rounded hover:bg-[#5C2C5D] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">

        <span className='text-sm'>Sign In</span>
    </Dialog.Trigger>
  )
}
