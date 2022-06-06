import YouTube from "react-youtube";
import React from "react";
import { StyledPlaylistContainer } from "../createPlaylist/StyledPlaylistContainer";
import VideoItem from "../../components/videoItem/VideoItem";

const WatchPlaylist = ({ location }) => {
    const playlistItem = location.item;
    const videoSrc = `https://www.youtube.com/embed/${playlistItem.videos[0].id}`;

    const displayPlaylistVideos = () => {
        return playlistItem.videos.map((video) => {
            console.log(video);
            return (
                <VideoItem
                    key={video.id}
                    video={video}
                    videoImage="imageUrl"
                    videoTitle="title"
                ></VideoItem>
            );
        });
    };

    return (
        <div>
            <StyledPlaylistContainer>
                {displayPlaylistVideos()}
            </StyledPlaylistContainer>
            <YouTube videoId={playlistItem.videos[0].id}></YouTube>
        </div>
    );
};

export default WatchPlaylist;

//  videoImage="snippet.thumbnails.medium.url" videoTitle="snippet.title"
