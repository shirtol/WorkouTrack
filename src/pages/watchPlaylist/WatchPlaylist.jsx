import YouTube from "react-youtube";
import React from "react";
import { StyledPlaylistContainer } from "../createPlaylist/StyledPlaylistContainer";
import VideoItem from "../../components/videoItem/VideoItem";
import { StyledFlexWrapper } from "../../components/wrappers/flexWrapper/StyledFlexWrapper";
import { StyledYoutube } from "../../components/styledYoutube/StyledYoutube";
import "./watchPlaylist.css";

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
        <StyledFlexWrapper>
            <StyledFlexWrapper
                justifyContent="space-between"
                width="90%"
                height="100vh"
            >
                <StyledPlaylistContainer position="static">
                    {displayPlaylistVideos()}
                </StyledPlaylistContainer>
                {/* <StyledYoutube videoId={playlistItem.videos[0].id}></StyledYoutube> */}
                <div className="youtube-wrapper">
                    <YouTube
                        videoId={playlistItem.videos[0].id}
                        // opts={{ width: "960", height: "585" }}
                    ></YouTube>
                </div>
            </StyledFlexWrapper>
        </StyledFlexWrapper>
    );
};

export default WatchPlaylist;

//  videoImage="snippet.thumbnails.medium.url" videoTitle="snippet.title"
