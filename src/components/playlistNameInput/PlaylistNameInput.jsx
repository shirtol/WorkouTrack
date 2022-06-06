import React from "react";
import { StyledPlaylistNameInput } from "./StyledPlaylistNameInput";

const PlaylistNameInput = ({ onPlaylistNameChange, value }) => {
    return (
        <StyledPlaylistNameInput
            onChange={onPlaylistNameChange}
            value={value}
        ></StyledPlaylistNameInput>
    );
};

export default PlaylistNameInput;
