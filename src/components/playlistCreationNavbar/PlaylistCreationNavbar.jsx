import React from "react";
import { StyledButton } from "../button/StyledButton";
import PlaylistNameInput from "../playlistNameInput/PlaylistNameInput";
import { StyledFlexWrapper } from "../wrappers/flexWrapper/StyledFlexWrapper";
import { StyledPlaylistCreationStep } from "./StyledPlaylistCreationStep";

const PlaylistCreationNavbar = ({
    onSavePlaylistClick,
    onPlaylistNameChange,
    playlistName,
    history,
}) => {
    const onGoBackClicked = () => {
        history.goBack();
    };
    return (
        <StyledFlexWrapper>
            <StyledFlexWrapper
                flexDirection="row"
                justifyContent="space-between"
                width="95%"
                justifyContentTablet="space-between"
            >
                <div>
                    <StyledPlaylistCreationStep
                        className="fa-solid fa-arrow-left fa-2x"
                        onClick={onGoBackClicked}
                    ></StyledPlaylistCreationStep>
                    <PlaylistNameInput
                        onPlaylistNameChange={onPlaylistNameChange}
                        value={playlistName}
                    ></PlaylistNameInput>
                </div>

                <StyledButton onClick={onSavePlaylistClick}>
                    <i class="fa-solid fa-floppy-disk"></i>
                </StyledButton>
            </StyledFlexWrapper>
        </StyledFlexWrapper>
    );
};

export default PlaylistCreationNavbar;
