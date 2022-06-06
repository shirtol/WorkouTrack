import React, { useEffect, useState } from "react";
import AddPlaylistModal from "../../components/addPlaylistModal/AddPlaylistModal";
import PlaylistItem from "../../components/playlistItem/PlaylistItem";
import RemovePlaylistModal from "../../components/removePlaylistModal/RemovePlaylistModal";
import { StyledGridWrapper } from "../../components/wrappers/gridWrapper/StyledGridWrapper";
import { useFirebase } from "../../context/FirebaseContext";
import { usePlaylists } from "../../context/PlaylistsContext";
import { deleteDocument } from "../../utils/firebaseUtils";
import { StyledAddBtn } from "./StyledAddBtn";

const Playlists = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const { allPlaylists, setAllPlaylists } = usePlaylists();
    const [playlistToRemove, setPlaylistToRemove] = useState();
    const { db } = useFirebase();

    const onAddBtnClicked = () => {
        setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
    };

    const onDeletePlaylistClicked = () => {
        const idxOfRemovedPlaylist = allPlaylists.indexOf(playlistToRemove);
        const allPlaylistsCopy = [...allPlaylists];
        allPlaylistsCopy.splice(idxOfRemovedPlaylist, 1);
        setAllPlaylists(allPlaylistsCopy);
        setIsDeleteModalOpen(false);
        deleteDocument(db, "playlist", playlistToRemove.id);
    };

    const onDeleteIconClicked = (playlist) => {
        setPlaylistToRemove(playlist);
        setIsDeleteModalOpen(true);
    };

    const onCancelDelete = () => setIsDeleteModalOpen(false);

    const displayUserPlaylists = () => {
        return allPlaylists.map((playlist) => {
            return (
                <PlaylistItem
                    playlist={playlist}
                    onDeletePlaylistClicked={onDeleteIconClicked}
                ></PlaylistItem>
            );
        });
    };

    return (
        <>
            <RemovePlaylistModal
                isShown={isDeleteModalOpen}
                onCancelBtnClicked={onCancelDelete}
                onApproveBtnClicked={onDeletePlaylistClicked}
            ></RemovePlaylistModal>
            <AddPlaylistModal isShown={isModalOpen}></AddPlaylistModal>
            <StyledGridWrapper gridTemplateColsTablet="repeat(2, 1fr)">
                {displayUserPlaylists()}
            </StyledGridWrapper>
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
