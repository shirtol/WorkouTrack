import React from "react";
import { StyledButton } from "../button/StyledButton";
import { StyledInput } from "../input/StyledInput";
import PlaylistNameInput from "../playlistNameInput/PlaylistNameInput";
import { StyledFlexWrapper } from "../wrappers/flexWrapper/StyledFlexWrapper";
import { StyledPlaylistCreationStep } from "./StyledPlaylistCreationStep";

const PlaylistCreationNavbar = ({
    onSavePlaylistClick,
    onPlaylistNameChange,
    playlistName,
}) => {
    return (
        <StyledFlexWrapper>
            <StyledFlexWrapper
                flexDirection="row"
                justifyContent="space-between"
                width="95%"
            >
                <div>
                    <StyledPlaylistCreationStep className="fa-solid fa-arrow-left fa-2x"></StyledPlaylistCreationStep>
                    <PlaylistNameInput
                        onPlaylistNameChange={onPlaylistNameChange}
                        value={playlistName}
                    ></PlaylistNameInput>
                </div>

                <StyledButton onClick={onSavePlaylistClick}>Save</StyledButton>
            </StyledFlexWrapper>
        </StyledFlexWrapper>
    );
};

export default PlaylistCreationNavbar;
