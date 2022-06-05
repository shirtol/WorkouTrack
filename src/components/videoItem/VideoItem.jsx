import React from "react";
import { StyledLink } from "../link/StyledLink";
import { StyledVideoCard } from "../videoCard/StyledVideoCard";
import { StyledVideoImage } from "../videoCard/StyledVideoImage";
import { StyledVideoTitle } from "../videoCard/StyledVideoTitle";
import { StyledVideoLink } from "./StyledVideoLink";

const VideoItem = ({ video }) => {
    return (
        <StyledVideoCard>
            <StyledVideoLink
                href="https://www.youtube.com/watch?v=tmpV2u1HD0I&ab_channel=ZumbaClass"
                target="_blank"
            >
                <StyledVideoImage
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                />
            </StyledVideoLink>
            <StyledVideoTitle>{video.snippet.title}</StyledVideoTitle>
        </StyledVideoCard>
    );
};

export default VideoItem;
