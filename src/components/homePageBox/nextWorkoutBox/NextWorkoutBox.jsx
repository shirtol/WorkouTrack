import React from "react";
import { StyledFlexWrapper } from "../../wrappers/flexWrapper/StyledFlexWrapper";
import { StyledSpan } from "../StyledSpan";
import { StyledTodayWorkoutSubTitle } from "../StyledtodayworkoutSubTitle";
import { StyledTodayWorkoutTitle } from "../StyledTodayWorkoutTitle";

const NextWorkoutBox = ({ environment, equipments, type }) => {
    return (
        <StyledFlexWrapper
            flexDirection="column"
            gap="0"
            flexDirectionTablet="column"
        >
            <StyledTodayWorkoutTitle>
                Start your next workout now!
            </StyledTodayWorkoutTitle>
            <StyledTodayWorkoutSubTitle>
                <StyledSpan>place:</StyledSpan> <br /> {environment}
            </StyledTodayWorkoutSubTitle>
            <StyledTodayWorkoutSubTitle>
                <StyledSpan>Equipments:</StyledSpan> <br /> {equipments}
            </StyledTodayWorkoutSubTitle>
            <StyledTodayWorkoutSubTitle>
                <StyledSpan>Type:</StyledSpan> <br /> {type}
            </StyledTodayWorkoutSubTitle>
        </StyledFlexWrapper>
    );
};

export default NextWorkoutBox;
