import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../firebase/firebaseConfig";
import { Input } from "../Form/Input";

// Radix UI
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";

// Function to register a new user in the database (Firebase and Prisma)
export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle the sign up
  const handleSignUp = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        createUserInDatabase(userCredential.user.uid);
        console.log(`User created: ${userCredential.user.email}`);
        alert(`Hi ${userCredential.user.email}, welcome to A BetterDay!`);

        // Once the user is created, we reload the page to show the new user
        window.location.reload();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(`Oops, something went wrong, please try again!`);
      });
  };

  // This function saves the user.uid, name and email in the database using axions, the user.uid is generate by firebase
  async function createUserInDatabase(uid: string) {
    await axios
      .post(`http://localhost:3333/user/${uid}`, {
        name: name,
        email: email,
      })
      .then(() => {
        console.log("User created in the database (Firebase and Prisma).");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60" />

      <Dialog.Content className="fixed bg-[#e5e5e5] py-8 px-10 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480] shadow-lg shadow-black/20">
        <Dialog.Title className="text-3xl font-bold">
          Create an account
        </Dialog.Title>
        <Dialog.Description className="font-normal">
          Create an account and start by creating your first card.
        </Dialog.Description>

        {/* Form to Register */}
        <form onSubmit={handleSignUp}>
          <div className="mt-7 flex flex-col">
            <label htmlFor="title" className="text-xl font-semibold">
              Enter your name:
            </label>
            <Input
              type="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mt-3 flex flex-col">
            <label htmlFor="title" className="text-xl font-semibold">
              Enter your email:
            </label>
            <Input
              type="email"
              placeholder="johndoe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mt-3 flex flex-col">
            <label htmlFor="title" className="text-xl font-semibold">
              Enter your password:
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
            Register
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
