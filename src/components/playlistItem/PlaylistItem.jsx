import React from "react";
import { StyledDeleteIcon } from "../deleteIcon/StyledDeleteIcon";
import { StyledLink } from "../link/StyledLink";
import { StyledVideoCard } from "../videoCard/StyledVideoCard";
import { StyledVideoImage } from "../videoCard/StyledVideoImage";
import { StyledVideoTitle } from "../videoCard/StyledVideoTitle";

const PlaylistItem = ({
    playlist,
    onDeletePlaylistClicked,
    hasDeleteIcon = true,
}) => {
    return (
        <StyledVideoCard>
            <StyledLink
                to={{
                    pathname: `playlists/${playlist.id}`,
                    item: playlist,
                }}
            >
                <StyledVideoImage
                    src={playlist.videos[0].imageUrl}
                    alt={playlist.title}
                ></StyledVideoImage>
                <StyledVideoTitle>{playlist.title}</StyledVideoTitle>
            </StyledLink>
            {hasDeleteIcon && (
                <StyledDeleteIcon
                    className="fa-solid fa-trash-can fa-2x"
                    onClick={() => onDeletePlaylistClicked(playlist)}
                ></StyledDeleteIcon>
            )}
        </StyledVideoCard>
    );
};

export default PlaylistItem;
