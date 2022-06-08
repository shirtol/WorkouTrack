import { async } from "@firebase/util";
import React from "react";
import { useFirebase } from "../../context/FirebaseContext";
import { StyledButton } from "../button/StyledButton";
import { StyledLogOutText } from "./StyledLogOutText";
import { StyledLogOutWrapper } from "./StyledLogOutWrapper";

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
