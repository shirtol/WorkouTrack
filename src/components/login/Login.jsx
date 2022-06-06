import { useEffect, useState } from "react";
import { useFirebase } from "../../context/FirebaseContext";
import { StyledButton } from "../button/StyledButton";
import { StyledModal } from "../modal/StyledModal";
import { StyledModalWrapper } from "../modalWrapper/StyledModalWrapper";
import { StyledFlexWrapper } from "../wrappers/flexWrapper/StyledFlexWrapper";
import { StyledGoogleIcon } from "./icon/StyledGoogleIcon";
import { StyledLoginButton } from "./StyledLoginButton";
import { StyledLoginSubTitle } from "./StyledLoginSubtitle";
import { StyledLoginTitle } from "./StyledLoginTitle";

const Login = ({ location, history }) => {
    const { signIn, currentUser } = useFirebase();

    useEffect(() => {
        if (currentUser) {
            history.replace("/");
        }
    }, [currentUser]);

    return (
        <StyledModalWrapper>
            <StyledFlexWrapper flexDirection="column">
                <StyledLoginTitle>
                    UH OH! <br /> Looks like you're not signed in yet
                </StyledLoginTitle>
                <StyledLoginSubTitle>No more excuses!</StyledLoginSubTitle>
                <StyledLoginButton>
                    <StyledButton onClick={signIn}>
                        <StyledGoogleIcon className="fab fa-google"></StyledGoogleIcon>
                        Sign in with google
                    </StyledButton>
                </StyledLoginButton>
            </StyledFlexWrapper>
        </StyledModalWrapper>
    );
};

export default Login;
