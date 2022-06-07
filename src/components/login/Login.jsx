import { useEffect, useState } from "react";
import { useFirebase } from "../../context/FirebaseContext";
import { StyledButton } from "../button/StyledButton";
import { StyledModal } from "../modal/StyledModal";
import { StyledModalWrapper } from "../modalWrapper/StyledModalWrapper";
import { StyledFlexWrapper } from "../wrappers/flexWrapper/StyledFlexWrapper";
import { StyledGoogleIcon } from "./icon/StyledGoogleIcon";
import { StyledLoginButton } from "./StyledLoginButton";
import { StyledLoginSubTitle } from "./StyledLoginSubtitle";
import { StyledTitle } from "../title/StyledTitle";
import Spinner from "../spinner/Spinner";

const Login = ({ location, history }) => {
    const { signIn, currentUser } = useFirebase();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (currentUser) {
            history.replace("/");
        }
    }, [currentUser]);

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timeOutId);
    }, []);

    return (
        <>
            {isLoading ? (
                <Spinner isShown={isLoading}></Spinner>
            ) : (
                <StyledModalWrapper>
                    <StyledFlexWrapper
                        flexDirection="column"
                        flexDirectionTablet="column"
                    >
                        <StyledTitle>
                            UH OH! <br /> Looks like you're not signed in yet
                        </StyledTitle>
                        <StyledLoginSubTitle>
                            No more excuses!
                        </StyledLoginSubTitle>
                        <StyledLoginButton>
                            <StyledButton onClick={signIn}>
                                <StyledGoogleIcon className="fab fa-google"></StyledGoogleIcon>
                                Sign in with google
                            </StyledButton>
                        </StyledLoginButton>
                    </StyledFlexWrapper>
                </StyledModalWrapper>
            )}
        </>
    );
};

export default Login;
