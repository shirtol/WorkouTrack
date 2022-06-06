import React from "react";
import { StyledAddVideoBtn } from "../addVideoBtn/StyledAddvideoBtn";
import { StyledVideoCard } from "../videoCard/StyledVideoCard";
import { StyledVideoImage } from "../videoCard/StyledVideoImage";
import { StyledVideoTitle } from "../videoCard/StyledVideoTitle";
import { StyledVideoLink } from "./StyledVideoLink";

const VideoItem = ({ video, onAddItemToPlaylist, videoImage, videoTitle }) => {
    const getDesiredValue = (path) => {
        const splittedPath = path.split(".");
        return splittedPath.reduce((acc, curr) => {
            return acc[curr];
        }, video);
    };

    console.log(video);

    return (
        <StyledVideoCard>
            <StyledVideoLink
                href={`https://www.youtube.com/watch?v=${getDesiredValue(
                    "id.videoId"
                )}`}
                target="_blank"
            >
                <StyledVideoImage
                    src={getDesiredValue(videoImage)}
                    // src={video.snippet.thumbnails.medium.url}
                    alt={getDesiredValue(videoTitle)}
                    // alt={video.snippet.title}
                />
            </StyledVideoLink>
            <StyledVideoTitle>{getDesiredValue(videoTitle)}</StyledVideoTitle>
            <StyledAddVideoBtn
                className="fa-solid fa-circle-plus fa-2x"
                onClick={() => onAddItemToPlaylist(video)}
            ></StyledAddVideoBtn>
        </StyledVideoCard>
    );
};

export default VideoItem;
