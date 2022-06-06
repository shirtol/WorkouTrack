import React from "react";
import VideoItem from "../videoItem/VideoItem";
import { StyledGridWrapper } from "../wrappers/gridWrapper/StyledGridWrapper";

const VideoGrid = ({ videos, onAddItemToPlaylist }) => {
    const renderedGrid = videos.map((video) => {
        return (
            <VideoItem
                key={video.etag}
                video={video}
                onAddItemToPlaylist={onAddItemToPlaylist}
                isClickableImage={true}
                videoImage="snippet.thumbnails.medium.url"
                videoTitle="snippet.title"
            ></VideoItem>
        );
    });
    return <StyledGridWrapper>{renderedGrid}</StyledGridWrapper>;
};

export default VideoGrid;
