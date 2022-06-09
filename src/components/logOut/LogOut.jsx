import React from "react";
import { useFirebase } from "../../context/FirebaseContext";
import { StyledLogOutText } from "./StyledLogOutText";

const LogOut = () => {
    const { signOff } = useFirebase();

    const OnLogOut = async () => {
        try {
            await signOff();
        } catch (err) {
            console.error(err);
        }
    };
    return <StyledLogOutText onClick={OnLogOut}>Log Out</StyledLogOutText>;
};

export default LogOut;
