import React from "react";
import { StyledFlexWrapper } from "../../wrappers/flexWrapper/StyledFlexWrapper";
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
                place: <br /> {environment}
            </StyledTodayWorkoutSubTitle>
            <StyledTodayWorkoutSubTitle>
                Equipments: <br /> {equipments}
            </StyledTodayWorkoutSubTitle>
            <StyledTodayWorkoutSubTitle>
                Type: <br /> {type}
            </StyledTodayWorkoutSubTitle>
        </StyledFlexWrapper>
    );
};

export default NextWorkoutBox;
