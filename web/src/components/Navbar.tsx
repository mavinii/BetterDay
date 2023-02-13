// Radix UI
import * as Dialog from "@radix-ui/react-dialog";
import AuthDetails from "./Auth/AuthDetails";
import LoginButton from "./Auth/LoginButton";
import RegisterButton from "./Auth/RegisterButton";

import { SignIn } from "./Auth/SignIn";
import { SignUp } from "./Auth/SignUp";

// Top Navbar with name and buttons
export function Nav() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <nav
        className="flex justify-around py-4 bg-white/80
            backdrop-blur-md shadow-md w-full
            fixed top-0 left-0 right-0 z-10"
      >
        <div className="items-center hidden space-x-8 lg:flex">
          <a className="flex text-2xl font-bold text-gray-900">A BetterDay</a>
        </div>

        <div className="flex items-center space-x-5">
          <Dialog.Root>
            <div>
              <SignIn />
              <LoginButton />
            </div>
          </Dialog.Root>

          <Dialog.Root>
            <div>
              <SignUp />
              <RegisterButton />
            </div>
          </Dialog.Root>
          <AuthDetails />
        </div>
      </nav>
    </div>
  );
}
