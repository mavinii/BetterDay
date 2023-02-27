import * as Dialog from "@radix-ui/react-dialog";
import { MdControlPoint } from "react-icons/md";

// Firebase
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase/firebaseConfig";

/**
 * This is responsible to render the Title and Subtitle and the button to add a new card,
 * but it first checks if the user is logged in, if not, it will display a disable button.
*/
export default function CreateCard() {
  const [authUser, setAuthUser] = useState<{ email: string | null } | null>(null);

  useEffect(() => {
    const linsten = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => linsten();
  }, []);

  return (

    // Title and Subtitle
    <div className="py-3 flex justify-between items-center">
      <div>
        <strong className="text-4xl font-extrabold text-gray-900">
          All days
        </strong>
        <span className="text-base text-slate-500 block">
          Add new cards of what has been happening
        </span>
      </div>

        
      {/* It checks if the user is signed in and ables the button to add the card */}
      <div>
        {authUser ? (
          <>
            <Dialog.Trigger className="flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 bg-[#5C2C5D] hover:bg-[#49134a] text-white">
              <span className="text-sm">Create Card</span>
              <MdControlPoint className="text-2xl" />
            </Dialog.Trigger>
          </>
        ) : (
          <>
            <button 
            disabled
            className="flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 bg-[#391739] text-white"
            >
              Not Signed In
            </button>
          </>
        )}
      </div>
    </div>
  );
}
