import React from "react";
import { StyledFlexWrapper } from "../../wrappers/flexWrapper/StyledFlexWrapper";
import { StyledTodayWorkoutTitle } from "../StyledTodayWorkoutTitle";

const NoWorkoutTodayBox = () => {
    return (
        <StyledFlexWrapper>
            <StyledTodayWorkoutTitle>
                No workout for today
            </StyledTodayWorkoutTitle>
        </StyledFlexWrapper>
    );
};

export default NoWorkoutTodayBox;
