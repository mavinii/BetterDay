import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '../../../firebase/firebaseConfig'

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null)

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
            console.log('Sign Out successfully')
        })
        .catch((error) => {
            console.log(error)
        })
    }
  return (
    <div>
        { authUser ? 
            <><p>
                {`Hi, ${authUser.email}`}
            </p>
                <button onClick={handleSignOut}>
                    Sign Out
                </button>
            </> : 
            <p>
                Sign Out
            </p> 
        }        
    </div>
  )
}

export default AuthDetails