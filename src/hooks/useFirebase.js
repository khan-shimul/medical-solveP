import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
import { useEffect } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    // provider
    const googleProvider = new GoogleAuthProvider();

    // sign in with google
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // logout user
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser(null)
            })
            .finally(() => setIsLoading(false))
    }

    // observe user state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser(null)
            }

            setIsLoading(false)
        })
    }, [])

    return {
        user,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;