import React from "react";
import { StyledPlaylistNameInput } from "./StyledPlaylistNameInput";

const PlaylistNameInput = ({ onPlaylistNameChange, value }) => {
    return (
        <StyledPlaylistNameInput
            onChange={onPlaylistNameChange}
            value={value}
            maxLength="10"
        ></StyledPlaylistNameInput>
    );
};

export default PlaylistNameInput;
