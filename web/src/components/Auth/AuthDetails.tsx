import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase/firebaseConfig";

// Toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// This function is used to get the current user
const AuthDetails = () => {
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

  // This function signs out the current user
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Sign Out successfully");
        notify();
        
        // Reload the page after 4 seconds
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Success message
  const notify = () => toast.success('Sign Out successfully!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  return (
    <div>
      {/* TODO: Should I do the same the check if the user is connected before creating a card? */}
      {authUser ? (
        <>
          <p className="flex "> {`Hi, ${authUser.email}`}</p>
          <button
          className="w-full bg-red-500 rounded text-white hover:bg-red-700 text-center" 
          onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default AuthDetails;
