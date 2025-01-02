import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";
import { signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signinUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        }

    }, [])


    // onAuthStateChanged(auth, currentUser =>{
    //     if(currentUser){
    //         console.log('currently logged user', currentUser);
    //         setUser(currentUser)
    //     }
    //     else{
    //         console.log('no user logged in');
    //         setUser(null)
    //     }
    // })

    const authInfo = {
        name,
        user,
        signinUser,
        createUser,
        signOutUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;