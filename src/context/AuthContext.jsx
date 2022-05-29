import React, { useContext, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [token, setToken] = useState();

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            setToken(credential.accessToken);
            setCurrentUser(result.user);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        }
    };

    const value = { currentUser, signIn, token };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
