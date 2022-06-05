import React, { useState } from "react";
import youtubeApi from "../../apis/youtubeApi";
import AddPlaylistModal from "../../components/addPlaylistModal/AddPlaylistModal";
import { StyledAddBtn } from "./StyledAddBtn";

const Playlists = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onAddBtnClicked = () => {
        setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
    };

    const onCreatePlaylistClicked = () => {};

    return (
        <>
            <AddPlaylistModal
                isShown={isModalOpen}
                onCreatePlaylistClicked={onCreatePlaylistClicked}
            ></AddPlaylistModal>
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
