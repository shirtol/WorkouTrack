import React from "react";
import { StyledFlexWrapper } from "../../wrappers/flexWrapper/StyledFlexWrapper";
import { StyledTodayWorkoutTitle } from "../StyledTodayWorkoutTitle";

import zen from "../../../assets/animations/noWorkout.json";
import { StyledZenLottie } from "./StyledZenLottie";

const NoWorkoutTodayBox = ({ title, animationData }) => {
    return (
        <StyledFlexWrapper flexDirection="column" flexDirectionTablet="column">
            <StyledTodayWorkoutTitle>{title}</StyledTodayWorkoutTitle>
            <StyledZenLottie
                className="lottie-zen"
                animationData={animationData}
                loop
            />
        </StyledFlexWrapper>
    );
};

export default NoWorkoutTodayBox;
