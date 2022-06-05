import React from "react";
import { StyledButton } from "../button/StyledButton";
import { StyledInput } from "../input/StyledInput";
import { StyledAddPlaylistModal } from "./StyledAddPlaylistModal";
import { StyledAddPlaylistWrapper } from "./StyledAddPlaylistWrapper";

const AddPlaylistModal = ({ isShown, onCreatePlaylistClicked }) => {
    return (
        isShown && (
            <StyledAddPlaylistWrapper>
                <StyledAddPlaylistModal>
                    <StyledInput placeholder="Playlist name..."></StyledInput>
                    <StyledButton onClick={onCreatePlaylistClicked}>
                        Create!
                    </StyledButton>
                </StyledAddPlaylistModal>
            </StyledAddPlaylistWrapper>
        )
    );
};

export default AddPlaylistModal;
