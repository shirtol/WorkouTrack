import YouTube from "react-youtube";
import React from "react";

const WatchPlaylist = ({ location }) => {
    const playlistItem = location.item;
    const videoSrc = `https://www.youtube.com/embed/${playlistItem.videos[0].id}`;

    console.log(location.item);
    return (
        <div>
            <YouTube videoId={playlistItem.videos[0].id}></YouTube>
        </div>
    );
};

export default WatchPlaylist;
