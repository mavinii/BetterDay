import * as Dialog from "@radix-ui/react-dialog";

/**
 * This is the button that will open the modal "Know more" * 
 * @returns 
 */
export default function CreateSuggested() {
  return (
    <Dialog.Trigger className="flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
      <span>Know more</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
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
  );
}
