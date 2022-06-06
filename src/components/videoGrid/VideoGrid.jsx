import React from "react";
import VideoItem from "../videoItem/VideoItem";
import { StyledGridWrapper } from "../wrappers/gridWrapper/StyledGridWrapper";

const VideoGrid = ({ videos, onAddItemToPlaylist }) => {
    const renderedGrid = videos.map((video) => {
        return (
            <VideoItem
                key={video.etag}
                video={video}
                onIconClicked={onAddItemToPlaylist}
                isClickableImage={true}
                videoImage="snippet.thumbnails.medium.url"
                videoTitle="snippet.title"
                clickableIconClass="fa-solid fa-circle-plus fa-2x"
            ></VideoItem>
        );
    });
    return <StyledGridWrapper>{renderedGrid}</StyledGridWrapper>;
};

export default VideoGrid;
