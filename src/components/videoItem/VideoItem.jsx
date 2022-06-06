import React from "react";
import { StyledAddVideoBtn } from "../addVideoBtn/StyledAddvideoBtn";
import { StyledVideoCard } from "../videoCard/StyledVideoCard";
import { StyledVideoImage } from "../videoCard/StyledVideoImage";
import { StyledVideoTitle } from "../videoCard/StyledVideoTitle";
import { StyledVideoLink } from "./StyledVideoLink";

const VideoItem = ({
    video,
    videoImage,
    videoTitle,
    isClickableImage,
    clickableIconClass,
    onIconClicked,
}) => {
    const getDesiredValue = (path) => {
        const splittedPath = path.split(".");
        return splittedPath.reduce((acc, curr) => {
            return acc[curr];
        }, video);
    };

    return (
        <StyledVideoCard>
            {isClickableImage ? (
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
            ) : (
                <StyledVideoImage
                    src={getDesiredValue(videoImage)}
                    // src={video.snippet.thumbnails.medium.url}
                    alt={getDesiredValue(videoTitle)}
                    // alt={video.snippet.title}
                />
            )}
            <StyledVideoTitle>{getDesiredValue(videoTitle)}</StyledVideoTitle>
            <StyledAddVideoBtn
                className={clickableIconClass}
                onClick={() => onIconClicked(video)}
            ></StyledAddVideoBtn>
        </StyledVideoCard>
    );
};

export default VideoItem;
