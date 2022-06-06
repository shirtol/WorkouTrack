import React, { useEffect, useState } from "react";
import youtubeApi from "../../apis/youtubeApi";
import AddPlaylistModal from "../../components/addPlaylistModal/AddPlaylistModal";
import PlaylistItem from "../../components/playlistItem/PlaylistItem";
import VideoItem from "../../components/videoItem/VideoItem";
import { StyledGridWrapper } from "../../components/wrappers/gridWrapper/StyledGridWrapper";
import { usePlaylists } from "../../context/PlaylistsContext";
import { StyledAddBtn } from "./StyledAddBtn";

const Playlists = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { allPlaylists } = usePlaylists();

    const onAddBtnClicked = () => {
        setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
    };

    const displayUserPlaylists = () => {
        return allPlaylists.map((playlist) => {
            return <PlaylistItem playlist={playlist}></PlaylistItem>;
        });
    };

    return (
        <>
            <AddPlaylistModal isShown={isModalOpen}></AddPlaylistModal>
            <StyledGridWrapper>{displayUserPlaylists()}</StyledGridWrapper>
            <div>
                <StyledAddBtn
                    className="fa-solid fa-circle-plus fa-3x"
                    onClick={onAddBtnClicked}
                ></StyledAddBtn>
            </div>
        </>
    );
};

export default Playlists;
