import React, { useState } from "react";
import youtubeApi from "../../apis/youtubeApi";
import { StyledButton } from "../../components/button/StyledButton";
import { StyledInput } from "../../components/input/StyledInput";
import PlaylistCreationNavbar from "../../components/playlistCreationNavbar/PlaylistCreationNavbar";
import VideoGrid from "../../components/videoGrid/VideoGrid";
import VideoItem from "../../components/videoItem/VideoItem";
import { StyledFlexWrapper } from "../../components/wrappers/flexWrapper/StyledFlexWrapper";
import { useFirebase } from "../../context/FirebaseContext";
import { usePlaylists } from "../../context/PlaylistsContext";
import { Colors } from "../../utils/colors";
import { addDocument } from "../../utils/firebaseUtils";
import { StyledPlaylistContainer } from "./StyledPlaylistContainer";

const CreatePlaylist = ({ location, history }) => {
    const [videos, setVideos] = useState([]);

    const [nextPageToken, setNextPageToken] = useState("");
    const [term, setTerm] = useState("");
    const [playlistVideos, setPlaylistVideos] = useState([]);
    const { db, currentUser } = useFirebase();
    const [playlistName, setPlaylistName] = useState(location.item);
    const { allPlaylists, setAllPlaylists } = usePlaylists();

    const onInputChange = ({ target: { value } }) => setTerm(value);

    const onBtnClick = async () => {
        const response = await youtubeApi.get("/search", {
            params: {
                q: term,
            },
        });
        setVideos(response.data.items);
        setNextPageToken(response.data.nextPageToken);
    };

    console.log(history);

    const onAddItemToPlaylist = (item) =>
        setPlaylistVideos((prevPlaylistVideos) => [
            ...prevPlaylistVideos,
            item,
        ]);

    const onRemoveItemFromPlaylist = (item) => {
        const itemIdx = playlistVideos.indexOf(item);
        const playlistCopy = [...playlistVideos];
        playlistCopy.splice(itemIdx, 1);
        setPlaylistVideos(playlistCopy);
    };

    const displayPlaylistVideos = () => {
        return playlistVideos.map((video) => {
            return (
                <VideoItem
                    key={video.id.videoId}
                    video={video}
                    videoImage="snippet.thumbnails.medium.url"
                    videoTitle="snippet.title"
                    isClickableImage={true}
                    clickableIconClass="fa-solid fa-circle-minus fa-2x"
                    onIconClicked={onRemoveItemFromPlaylist}
                ></VideoItem>
            );
        });
    };

    const onSavePlaylistClick = () => {
        const newPlaylistObj = {
            owner: currentUser.uid,
            title: playlistName,
            videos: playlistVideos.map((video) => ({
                id: video.id.videoId,
                imageUrl: video.snippet.thumbnails.medium.url,
                title: video.snippet.title,
            })),
        };
        addDocument(db, "playlist", newPlaylistObj);
        setAllPlaylists((prevAllPlaylists) => [
            ...prevAllPlaylists,
            newPlaylistObj,
        ]);

        history.goBack();
    };

    const onPlaylistNameChange = ({ target: { value } }) => {
        setPlaylistName(value);
    };

    return (
        <>
            <PlaylistCreationNavbar
                onSavePlaylistClick={onSavePlaylistClick}
                onPlaylistNameChange={onPlaylistNameChange}
                playlistName={playlistName}
                history={history}
            ></PlaylistCreationNavbar>
            <StyledFlexWrapper>
                <StyledInput
                    color={Colors.greyInput}
                    placeholder="search videos..."
                    onChange={onInputChange}
                    value={term}
                ></StyledInput>
                <StyledButton onClick={onBtnClick}>
                    <i class="fas fa-search"></i>
                </StyledButton>
            </StyledFlexWrapper>

            <StyledFlexWrapper flexDirection="row" justifyContent="flex-end">
                <StyledPlaylistContainer>
                    {displayPlaylistVideos()}
                </StyledPlaylistContainer>
                <StyledFlexWrapper
                    flexDirection="column"
                    width="75%"
                    height="80vh"
                >
                    <VideoGrid
                        videos={videos}
                        onAddItemToPlaylist={onAddItemToPlaylist}
                        selectedVideos={playlistVideos}
                        onRemoveItemFromPlaylist={onRemoveItemFromPlaylist}
                    ></VideoGrid>
                </StyledFlexWrapper>
            </StyledFlexWrapper>
        </>
    );
};

export default CreatePlaylist;
