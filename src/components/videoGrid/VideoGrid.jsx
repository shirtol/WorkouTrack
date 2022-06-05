import React from "react";
import VideoItem from "../videoItem/VideoItem";
import { StyledGridWrapper } from "../wrappers/gridWrapper/StyledGridWrapper";
import { StyledVideoGrid } from "./StyledVideoGrid";

const VideoGrid = ({ videos }) => {
    const renderedGrid = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video}></VideoItem>;
    });
    return <StyledGridWrapper>{renderedGrid}</StyledGridWrapper>;
};

export default VideoGrid;
