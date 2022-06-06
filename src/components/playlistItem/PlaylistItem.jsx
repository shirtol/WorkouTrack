import React from "react";
import { StyledLink } from "../link/StyledLink";
import { StyledVideoCard } from "../videoCard/StyledVideoCard";
import { StyledVideoImage } from "../videoCard/StyledVideoImage";
import { StyledVideoTitle } from "../videoCard/StyledVideoTitle";

const PlaylistItem = ({ playlist }) => {
    return (
        <StyledVideoCard>
            <StyledLink
                to={{
                    pathname: "/watch-playlist",
                }}
            >
                <StyledVideoImage
                    src={playlist.videos[0].imageUrl}
                    alt={playlist.title}
                ></StyledVideoImage>
                <StyledVideoTitle>{playlist.title}</StyledVideoTitle>
            </StyledLink>
        </StyledVideoCard>
    );
};

export default PlaylistItem;
