import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '../../../firebase/firebaseConfig'

// This function is used to get the current user
const AuthDetails = () => {
    // const [authUser, setAuthUser] = useState(null)
    const [authUser, setAuthUser] = useState<{ email: string } | null>(null)


    useEffect(() => {
        const linsten = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })

       return () => linsten()
    }, []);

    // this function signs out the current user
    const handleSignOut = () => {
        auth.signOut()
        .then(() => {
            alert('Sign Out successfully')
            console.log('Sign Out successfully')
        })
        .catch((error) => {
            console.log(error)
        })
    }
  return (
    <div>
        {/* TODO: Should I do the same the check if the user is connected before creating a card? */}
        { authUser ? <><p> {`Hi, ${authUser.email}`}</p><button onClick={handleSignOut}>Sign Out</button></> : <p></p> }
    </div>
  )
}

export default AuthDetails;