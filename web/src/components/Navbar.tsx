import { Dialog } from "@radix-ui/react-dialog";
import AuthDetails from "./Auth/AuthDetails";
import { SignIn } from "./Auth/SignIn";
import { SignUp } from "./Auth/SignUp";
import SingUpBtn from "./Auth/SignUpBtn";
import SingInBtn from "./Auth/SingInBtn";

/**
 *  This is the Top Navbar of the application
 *  It is responsible for rendering the Navbar
 *  It should display the logo, the name of the application and the buttons to sign in and sign up 
 */
export default function Nav() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <nav
        className="flex justify-around py-4 bg-white/80
            backdrop-blur-md shadow-md w-full
            fixed top-0 left-0 right-0 z-10"
      >
        <div className="items-center hidden space-x-8 lg:flex">
          <a
            className="flex text-2xl font-bold text-gray-900"
          >
            A BetterDay
          </a>
        </div>

        <div className="flex items-center space-x-5">
          <div>
            <SignIn />
            <SingInBtn />
          </div>
         
         <div>
            <SignUp />
            <SingUpBtn />
         </div>
          <AuthDetails />        
        </div>
      </nav>
    </div>
  );
}
