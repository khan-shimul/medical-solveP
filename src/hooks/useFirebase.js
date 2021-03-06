import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signOut, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
import { useEffect } from "react";

initializeAuthentication();

const useFirebase = () => {
    // states
    const [user, setUser] = useState(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    // provider
    const googleProvider = new GoogleAuthProvider();

    // sign in with google
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // get user name
    const handleNameChange = e => {
        setName(e.target.value);
    }
    // set user name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => { })
            .catch(error => {
                setError(error.message)
            })
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
        email,
        password,
        error,
        auth,
        isLoading,
        handleNameChange,
        setUser,
        setUserName,
        setEmail,
        setPassword,
        setError,
        setIsLoading,
        signInUsingGoogle,
        logOut,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword
    }

}

export default useFirebase;