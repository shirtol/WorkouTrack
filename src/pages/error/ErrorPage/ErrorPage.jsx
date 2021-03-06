import React from "react";
import { StyledModalWrapper } from "../../../components/modalWrapper/StyledModalWrapper";
import { StyledTitle } from "../../../components/title/StyledTitle";
import { StyledFlexWrapper } from "../../../components/wrappers/flexWrapper/StyledFlexWrapper";
import error from "../../../assets/animations/404.json";
import { StyledErrorLottie } from "./StyledErrorLottie";

const ErrorPage = () => {
    return (
        <StyledModalWrapper>
            <StyledFlexWrapper
                flexDirection="column"
                flexDirectionTablet="column"
            >
                <StyledTitle>
                    UH OH! <br /> Looks Like You Reached Uncharted Territory
                    <br /> Go Back
                </StyledTitle>
                <StyledErrorLottie
                    animationData={error}
                    loop
                ></StyledErrorLottie>
            </StyledFlexWrapper>
        </StyledModalWrapper>
    );
};

export default ErrorPage;
