import * as Dialog from "@radix-ui/react-dialog";

// Firebase
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase/firebaseConfig";

export default function RegisterButton() {
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

    // It hides the Register button once the user is logged in
    <div>
      {authUser ? (
        <></>
      ) : (
        <>
          <Dialog.Trigger className="py-3 px-4 flex justify-center text-xs font-medium rounded space-x-1 bg-[#5C2C5D] hover:bg-[#49134a] text-white">
            <span className="text-sm">Register</span>
          </Dialog.Trigger>
        </>
      )}
    </div>
  );
}
