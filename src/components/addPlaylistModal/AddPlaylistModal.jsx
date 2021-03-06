import React, { useState } from "react";
import { StyledButton } from "../button/StyledButton";
import { StyledInput } from "../input/StyledInput";
import { StyledLink } from "../link/StyledLink";
import { StyledModal } from "../modal/StyledModal";
import { StyledModalWrapper } from "../modalWrapper/StyledModalWrapper";

const AddPlaylistModal = ({ isShown }) => {
    const [playlistName, setPlaylistName] = useState("");

    const onInputChange = ({ target: { value } }) => {
        setPlaylistName(value);
    };

    return (
        isShown && (
            <StyledModalWrapper>
                <StyledModal>
                    <StyledInput
                        placeholder="Playlist name..."
                        onChange={onInputChange}
                        value={playlistName}
                        maxLength="12"
                    ></StyledInput>
                    <StyledLink
                        disabled={!playlistName.length}
                        to={{
                            pathname: "/create-playlist",
                            item: playlistName,
                        }}
                    >
                        <StyledButton disabled={!playlistName.length}>
                            Create!
                        </StyledButton>
                    </StyledLink>
                </StyledModal>
            </StyledModalWrapper>
        )
    );
};

export default AddPlaylistModal;
