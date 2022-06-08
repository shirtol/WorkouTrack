import YouTube from "react-youtube";
import React, { useEffect, useState } from "react";
import { StyledPlaylistContainer } from "../createPlaylist/StyledPlaylistContainer";
import VideoItem from "../../components/videoItem/VideoItem";
import { StyledFlexWrapper } from "../../components/wrappers/flexWrapper/StyledFlexWrapper";
import "./watchPlaylist.css";
import { getKeyByValue } from "../../utils/utils";
import Months from "../../utils/months";
import { useWorkoutsPerMonth } from "../../context/WorkoutsPerMonthContext";
import { useFirebase } from "../../context/FirebaseContext";
import { setDocument } from "../../utils/firebaseUtils";
import { v4 as uuid } from "uuid";
import { usePlaylists } from "../../context/PlaylistsContext";

const WatchPlaylist = ({ location }) => {
    const { allPlaylists } = usePlaylists();
    const [playlistItem, setPlaylistItem] = useState();

    const [currVideoPlaying, setCurrVideoPlaying] = useState(
        playlistItem?.videos[0]
    );
    const { allWorkoutsPerMonth, setAllWorkoutsPerMonth } =
        useWorkoutsPerMonth();
    const { db, currentUser } = useFirebase();

    useEffect(() => {
        const playlist =
            location.item ??
            allPlaylists.find(
                (playlist) => playlist.id === location.pathname.split("/")[2]
            );
        setPlaylistItem(playlist);
        setCurrVideoPlaying(playlist?.videos[0]);
    }, [allPlaylists]);

    const displayPlaylistVideos = () => {
        return playlistItem?.videos.map((video) => {
            return (
                <VideoItem
                    key={video.id}
                    video={video}
                    videoImage="imageUrl"
                    videoTitle="title"
                    isClickableImage={false}
                    clickableIconClass="fa-solid fa-circle-play fa-2x"
                    onIconClicked={onPlayVideo}
                    textWidth="12rem"
                ></VideoItem>
            );
        });
    };

    const onPlayVideo = (video) => {
        setCurrVideoPlaying(video);
    };

    const getDate = () => {
        const currDate = new Date();
        const monthNum = currDate.getMonth();
        const stringyMonth = getKeyByValue(Months, monthNum);
        const currYear = currDate.getFullYear();
        return { stringyMonth, currYear };
    };

    const getWorkoutObj = (stringyMonth, currYear) =>
        allWorkoutsPerMonth.find(
            (workoutEl) =>
                workoutEl?.month === stringyMonth &&
                workoutEl?.year === currYear
        );

    const createArrOfWorkoutsCount = (workoutObj) => {
        const newObj = { ...workoutObj };
        newObj.numOfWorkouts += 1;
        return allWorkoutsPerMonth.map((workoutEl) =>
            workoutEl.id === newObj.id ? newObj : workoutEl
        );
    };

    const onEndWorkout = () => {
        const { stringyMonth, currYear } = getDate();
        const workoutObj = getWorkoutObj(stringyMonth, currYear);
        if (workoutObj !== undefined) {
            const arrOfWorkoutsCount = createArrOfWorkoutsCount(workoutObj);
            setAllWorkoutsPerMonth(arrOfWorkoutsCount);
            setDocument(db, "workoutsPerMonth", workoutObj, workoutObj.id);
        } else {
            const id = uuid();
            const newObj = {
                month: stringyMonth,
                numOfWorkouts: 1,
                year: currYear,
                owner: currentUser.uid,
                id: id,
            };
            setAllWorkoutsPerMonth([...allWorkoutsPerMonth, newObj]);
            setDocument(db, "workoutsPerMonth", newObj, id);
        }
    };

    const onCurrVideoEnd = () => {
        const idxOfVideo = playlistItem.videos.indexOf(currVideoPlaying);
        if (idxOfVideo < playlistItem.videos.length - 1) {
            setCurrVideoPlaying(playlistItem.videos[idxOfVideo + 1]);
        } else {
            onEndWorkout();
        }
    };

    return (
        <>
            <StyledFlexWrapper>
                <StyledFlexWrapper
                    justifyContent="space-between"
                    width="90%"
                    height="100vh"
                    flexDirectionTablet="column-reverse"
                >
                    <StyledPlaylistContainer position="static">
                        {displayPlaylistVideos()}
                    </StyledPlaylistContainer>
                    <div className="youtube-wrapper">
                        <YouTube
                            videoId={currVideoPlaying?.id}
                            onEnd={onCurrVideoEnd}
                            opts={{ playerVars: { autoplay: 1 } }}
                        ></YouTube>
                    </div>
                </StyledFlexWrapper>
            </StyledFlexWrapper>
        </>
    );
};

export default WatchPlaylist;
