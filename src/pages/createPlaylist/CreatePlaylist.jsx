import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import youtubeApi from "../../apis/youtubeApi";
import { StyledButton } from "../../components/button/StyledButton";
import { StyledInput } from "../../components/input/StyledInput";
import PlaylistCreationNavbar from "../../components/playlistCreationNavbar/PlaylistCreationNavbar";
import VideoGrid from "../../components/videoGrid/VideoGrid";
import VideoItem from "../../components/videoItem/VideoItem";
import { StyledFlexWrapper } from "../../components/wrappers/flexWrapper/StyledFlexWrapper";
import { useFirebase } from "../../context/FirebaseContext";
import { Colors } from "../../utils/colors";
import { addDocument } from "../../utils/firebaseUtils";
import { StyledPlaylistContainer } from "./StyledPlaylistContainer";

const CreatePlaylist = ({ location, history }) => {
    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState("");
    const [term, setTerm] = useState("");
    const [playlistVideos, setPlaylistVideos] = useState([]);
    const { db, currentUser } = useFirebase();
    const playlistName = location.item;

    const onInputChange = ({ target: { value } }) => setTerm(value);

    const onBtnClick = async () => {
        const response = await youtubeApi.get("/search", {
            params: {
                q: term,
            },
        });
        console.log(response);
        setVideos(response.data.items);
        setNextPageToken(response.data.nextPageToken);
    };

    const onAddItemToPlaylist = (item) =>
        setPlaylistVideos((prevPlaylistVideos) => [
            ...prevPlaylistVideos,
            item,
        ]);

    const displayPlaylistVideos = () => {
        return playlistVideos.map((video) => {
            return <VideoItem key={video.id.videoId} video={video}></VideoItem>;
        });
    };

    const onSavePlaylistClick = () => {
        addDocument(db, "playlist", {
            owner: currentUser.uid,
            title: playlistName,
            videos: playlistVideos.map((video) => ({
                id: video.id.videoId,
                imageUrl: video.snippet.thumbnails.medium.url,
                title: video.snippet.title,
            })),
        });
        history.goBack();
    };

    return (
        <>
            <PlaylistCreationNavbar
                onSavePlaylistClick={onSavePlaylistClick}
            ></PlaylistCreationNavbar>

            <StyledFlexWrapper flexDirection="row" justifyContent="flex-end">
                <StyledPlaylistContainer>
                    {displayPlaylistVideos()}
                </StyledPlaylistContainer>
                <StyledFlexWrapper
                    flexDirection="column"
                    width="75%"
                    height="80vh"
                >
                    <StyledFlexWrapper>
                        <StyledInput
                            color={Colors.greyInput}
                            placeholder="search videos..."
                            onChange={onInputChange}
                            value={term}
                        ></StyledInput>
                        <StyledButton onClick={onBtnClick}>Search</StyledButton>
                    </StyledFlexWrapper>
                    <VideoGrid
                        videos={videos}
                        onAddItemToPlaylist={onAddItemToPlaylist}
                    ></VideoGrid>
                </StyledFlexWrapper>
            </StyledFlexWrapper>
        </>
    );
};

export default CreatePlaylist;
