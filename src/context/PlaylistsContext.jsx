import React, { useContext, useEffect, useState } from "react";
import { getAllCollectionData } from "../utils/firebaseUtils";
import { useFirebase } from "./FirebaseContext";

const PlaylistsContext = React.createContext();

export const usePlaylists = () => useContext(PlaylistsContext);

const PlaylistsProvider = ({ children }) => {
    const { db, currentUser } = useFirebase();
    const [allPlaylists, setAllPlaylists] = useState([]);

    const getAllPlaylistsWrapper = async () => {
        if (db !== undefined) {
            const allData = await getAllCollectionData(
                db,
                "playlist",
                currentUser
            );

            setAllPlaylists(allData);
        }
    };

    //!TODO: Make all deletions and insertions in the context, and not send the set functions

    useEffect(() => {
        getAllPlaylistsWrapper();
    }, [db, currentUser]);

    const value = { allPlaylists, setAllPlaylists };

    return (
        <PlaylistsContext.Provider value={value}>
            {children}
        </PlaylistsContext.Provider>
    );
};

export default PlaylistsProvider;
