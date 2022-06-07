import React from "react";
import Lottie from "lottie-react";
import "./bgHomeAnimation.css";

import bgHomePage from "../../assets/animations/homeAnima.json";
import { StyledFlexWrapper } from "../wrappers/flexWrapper/StyledFlexWrapper";

const BgHomePage = () => {
    return (
        <StyledFlexWrapper>
            <Lottie
                className="lottie-bg-home"
                animationData={bgHomePage}
                loop
            />
        </StyledFlexWrapper>
    );
};

export default BgHomePage;
