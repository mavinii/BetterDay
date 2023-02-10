// Radix UI
import * as Dialog from "@radix-ui/react-dialog";

/**
 * This will be the suggested card component created by the AI
 * This will show up when the user clicks on the "Know more" button
*/
export function CreateCardSuggested() {

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60" />

      <Dialog.Content 
        className="fixed bg-[#e5e5e5] py-8 px-10 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480] shadow-lg shadow-black/20">
        
        <Dialog.Title className="text-3xl font-bold">
            It should bring the suggested card details
        </Dialog.Title>        
                
        <Dialog.Description className="text-xs font-thin">
          27/01/2012
        </Dialog.Description>

      </Dialog.Content>
    </Dialog.Portal>
  );
}
