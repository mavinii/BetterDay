import * as Dialog from "@radix-ui/react-dialog";

// Firebase
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase/firebaseConfig";

// Button to open the login modal
export default function LoginButton() {
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

    // It hides the Sign in button once the user is logged in
    <div>
      {authUser ? (
        <></>
      ) : (
        <>
          <Dialog.Trigger className="py-2 px-4 bg-transparent text-[#5C2C5D] font-semibold border border-[#5C2C5D] rounded hover:bg-[#5C2C5D] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
            <span className="text-sm">Sign In</span>
          </Dialog.Trigger>
        </>
      )}
    </div>
  );
}
