import React, { useContext, useState } from "react";
import {
    getAuth,
    GoogleAuthProvider,
    getAdditionalUserInfo,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import app from "../service/firebase";

const FirebaseContext = React.createContext();

export const useFirebase = () => useContext(FirebaseContext);

const FirebaseProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [currentUserInfo, setCurrentUserInfo] = useState();
    const [token, setToken] = useState();
    const [db, setDb] = useState();

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        setDb(getFirestore(app));
        setToken(user?.accessToken);
        setCurrentUser(user);
    });

    const provider = new GoogleAuthProvider();

    const signIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            setToken(credential?.accessToken);
            setCurrentUser(result?.user);
            setCurrentUserInfo(getAdditionalUserInfo(result));
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.error(
                `${errorCode} ${errorMessage} ${email} ${credential}`
            );
        }
    };

    const signOff = async () => {
        try {
            await signOut(auth);
            setCurrentUser(undefined);
        } catch (err) {
            console.error(err);
        }
    };

    const value = { currentUser, currentUserInfo, signIn, token, db, signOff };

    return (
        <FirebaseContext.Provider value={value}>
            {children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseProvider;
