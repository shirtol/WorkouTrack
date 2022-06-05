import React from "react";
import { StyledButton } from "../button/StyledButton";
import { StyledFlexWrapper } from "../wrappers/flexWrapper/StyledFlexWrapper";
import { StyledPlaylistCreationStep } from "./StyledPlaylistCreationStep";

const PlaylistCreationNavbar = ({ onSavePlaylistClick }) => {
    return (
        <StyledFlexWrapper flexDirection="row" justifyContent="space-between">
            <div>
                <StyledPlaylistCreationStep className="fa-solid fa-arrow-left fa-2x"></StyledPlaylistCreationStep>
                <StyledPlaylistCreationStep className="fa-duotone fa-1 fa-2x"></StyledPlaylistCreationStep>
                <StyledPlaylistCreationStep className="fa-duotone fa-2 fa-2x"></StyledPlaylistCreationStep>
            </div>
            <div>
                <StyledButton onClick={onSavePlaylistClick}>Save</StyledButton>
            </div>
        </StyledFlexWrapper>
    );
};

export default PlaylistCreationNavbar;
