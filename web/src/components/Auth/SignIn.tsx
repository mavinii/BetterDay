import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from '../../../firebase/firebaseConfig';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Function to handle the login
    const handleSignIn = (e) => {
      e.preventDefault();

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        console.log(userCredential);

        // const user = userCredential.user;

          // Signed in
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        }
      );
    }
  return (
    <div className="sing-in-container">
      <form onSubmit={handleSignIn}>
        <h1>Log in</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default SignIn;
