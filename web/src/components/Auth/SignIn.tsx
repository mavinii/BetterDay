import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../firebase/firebaseConfig";
import { Input } from "../Form/Input";

// Radix UI
import * as Dialog from "@radix-ui/react-dialog";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to reload the page after login
  function refr() {
    window.location.reload();
  }

  // Function to handle the login
  const handleSignIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try{
      await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert('Signed in successfully')
        console.log(userCredential);
        refr();
      })
    } 
    catch(e) {
      console.log(`Error: ${e}`);
    }
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60" />

      <Dialog.Content className="fixed bg-[#e5e5e5] py-8 px-10 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480] shadow-lg shadow-black/20">
        <Dialog.Title className="text-3xl font-bold">Sign in</Dialog.Title>
        <Dialog.Description className="font-normal">
          Please, sign in to your account to continue.
        </Dialog.Description>

        {/* Form to Sign in */}
        <form onSubmit={handleSignIn}>
          <div className="mt-7 flex flex-col">
            <label htmlFor="title" className="text-xl font-semibold">
              Log in:
            </label>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mt-3 flex flex-col">
            <label htmlFor="title" className="text-xl font-semibold">
              Password:
            </label>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#5C2C5D] mt-3 text-white rounded py-2 px-4 hover:bg-[#49134a]"
          >
            Sign In
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
