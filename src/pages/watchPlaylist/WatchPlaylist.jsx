import YouTube from "react-youtube";
import React, { useState } from "react";
import { StyledPlaylistContainer } from "../createPlaylist/StyledPlaylistContainer";
import VideoItem from "../../components/videoItem/VideoItem";
import { StyledFlexWrapper } from "../../components/wrappers/flexWrapper/StyledFlexWrapper";
import "./watchPlaylist.css";

const WatchPlaylist = ({ location }) => {
    const playlistItem = location.item;

    const [currVideoPlaying, setCurrVideoPlaying] = useState(
        playlistItem.videos[0]
    );

    const videoSrc = `https://www.youtube.com/embed/${playlistItem.videos[0].id}`;

    const displayPlaylistVideos = () => {
        return playlistItem.videos.map((video) => {
            return (
                <VideoItem
                    key={video.id}
                    video={video}
                    videoImage="imageUrl"
                    videoTitle="title"
                    isClickableImage={false}
                    clickableIconClass="fa-solid fa-circle-play fa-2x"
                    onIconClicked={onPlayVideo}
                ></VideoItem>
            );
        });
    };

    const onPlayVideo = (video) => {
        setCurrVideoPlaying(video);
    };

    const onCurrVideoEnd = () => {
        const idxOfVideo = playlistItem.videos.indexOf(currVideoPlaying);
        if (idxOfVideo < playlistItem.videos.length - 1) {
            setCurrVideoPlaying(playlistItem.videos[idxOfVideo + 1]);
        }
    };

    return (
        <StyledFlexWrapper>
            <StyledFlexWrapper
                justifyContent="space-between"
                width="90%"
                height="100vh"
            >
                <StyledPlaylistContainer position="static">
                    {displayPlaylistVideos()}
                </StyledPlaylistContainer>
                <div className="youtube-wrapper">
                    <YouTube
                        videoId={currVideoPlaying.id}
                        onEnd={onCurrVideoEnd}
                    ></YouTube>
                </div>
            </StyledFlexWrapper>
        </StyledFlexWrapper>
    );
};

export default WatchPlaylist;
