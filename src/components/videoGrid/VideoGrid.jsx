import React from "react";
import VideoItem from "../videoItem/VideoItem";
import { StyledVideoGrid } from "./StyledVideoGrid";

const VideoGrid = ({ videos }) => {
    const renderedGrid = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video}></VideoItem>;
    });
    return <StyledVideoGrid>{renderedGrid}</StyledVideoGrid>;
};

export default VideoGrid;
