import React from "react";
import VideoItem from "../videoItem/VideoItem";
import { StyledGridWrapper } from "../wrappers/gridWrapper/StyledGridWrapper";

const VideoGrid = ({
    videos,
    onAddItemToPlaylist,
    selectedVideos,
    onRemoveItemFromPlaylist,
}) => {
    const renderedGrid = videos.map((video) => {
        const isVideoSelected = selectedVideos.find(
            (vid) => vid.id.videoId === video.id.videoId
        );
        return (
            <VideoItem
                key={video.etag}
                video={video}
                onIconClicked={
                    isVideoSelected
                        ? onRemoveItemFromPlaylist
                        : onAddItemToPlaylist
                }
                isClickableImage={true}
                videoImage="snippet.thumbnails.medium.url"
                videoTitle="snippet.title"
                clickableIconClass={
                    isVideoSelected
                        ? "fa-solid fa-circle-minus fa-2x"
                        : "fa-solid fa-circle-plus fa-2x"
                }
                isSelected={isVideoSelected}
            ></VideoItem>
        );
    });
    return <StyledGridWrapper>{renderedGrid}</StyledGridWrapper>;
};

export default VideoGrid;
