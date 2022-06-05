import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "../button/StyledButton";
import { StyledInput } from "../input/StyledInput";
import { StyledLink } from "../link/StyledLink";
import { StyledAddPlaylistModal } from "./StyledAddPlaylistModal";
import { StyledAddPlaylistWrapper } from "./StyledAddPlaylistWrapper";

const AddPlaylistModal = ({ isShown, onCreatePlaylistClicked }) => {
    const [playlistName, setPlaylistName] = useState("");

    const onInputChange = ({ target: { value } }) => {
        setPlaylistName(value);
    };
    return (
        isShown && (
            <StyledAddPlaylistWrapper>
                <StyledAddPlaylistModal>
                    <StyledInput
                        placeholder="Playlist name..."
                        onChange={onInputChange}
                        value={playlistName}
                    ></StyledInput>
                    <StyledLink
                        to={{
                            pathname: "/create-playlist",
                            item: playlistName,
                        }}
                    >
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
