import React from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "../button/StyledButton";
import { StyledInput } from "../input/StyledInput";
import { StyledLink } from "../link/StyledLink";
import { StyledAddPlaylistModal } from "./StyledAddPlaylistModal";
import { StyledAddPlaylistWrapper } from "./StyledAddPlaylistWrapper";

const AddPlaylistModal = ({ isShown, onCreatePlaylistClicked }) => {
    return (
        isShown && (
            <StyledAddPlaylistWrapper>
                <StyledAddPlaylistModal>
                    <StyledInput placeholder="Playlist name..."></StyledInput>
                    <StyledLink to="/create-playlist">
                        <StyledButton onClick={onCreatePlaylistClicked}>
                            Create!
                        </StyledButton>
                    </StyledLink>
                </StyledAddPlaylistModal>
            </StyledAddPlaylistWrapper>
        )
    );
};

export default AddPlaylistModal;
