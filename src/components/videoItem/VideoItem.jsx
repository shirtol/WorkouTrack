import React from "react";
import { StyledAddVideoBtn } from "../addVideoBtn/StyledAddvideoBtn";
import { StyledVideoCard } from "../videoCard/StyledVideoCard";
import { StyledVideoImage } from "../videoCard/StyledVideoImage";
import { StyledVideoTitle } from "../videoCard/StyledVideoTitle";
import { StyledVideoLink } from "./StyledVideoLink";

const VideoItem = ({ video, onAddItemToPlaylist }) => {
    return (
        <StyledVideoCard>
            <StyledVideoLink
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
            >
                <StyledVideoImage
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                />
            </StyledVideoLink>
            <StyledVideoTitle>{video.snippet.title}</StyledVideoTitle>
            <StyledAddVideoBtn
                className="fa-solid fa-circle-plus fa-2x"
                onClick={() => onAddItemToPlaylist(video)}
            ></StyledAddVideoBtn>
        </StyledVideoCard>
    );
};

export default VideoItem;
