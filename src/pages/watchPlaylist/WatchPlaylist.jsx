import YouTube from "react-youtube";
import React, { useState } from "react";
import { StyledPlaylistContainer } from "../createPlaylist/StyledPlaylistContainer";
import VideoItem from "../../components/videoItem/VideoItem";
import { StyledFlexWrapper } from "../../components/wrappers/flexWrapper/StyledFlexWrapper";
import "./watchPlaylist.css";
import { Button } from "@mui/material";
import { getKeyByValue } from "../../utils/utils";
import Months from "../../utils/months";
import { useWorkoutsPerMonth } from "../../context/WorkoutsPerMonthContext";
import { useFirebase } from "../../context/FirebaseContext";
import { setDocument } from "../../utils/firebaseUtils";
import { v4 as uuid } from "uuid";

const WatchPlaylist = ({ location }) => {
    const playlistItem = location.item;
    const [currVideoPlaying, setCurrVideoPlaying] = useState(
        playlistItem.videos[0]
    );
    const { allWorkoutsPerMonth, setAllWorkoutsPerMonth } =
        useWorkoutsPerMonth();
    const { db, currentUser } = useFirebase();

    const videoSrc = `https://www.youtube.com/embed/${playlistItem.videos[0].id}`;

    const displayPlaylistVideos = () => {
        return playlistItem.videos.map((video) => {
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

    const onEndWorkoutClicked = () => {
        const currDate = new Date();
        const monthNum = currDate.getMonth();
        const stringyMonth = getKeyByValue(Months, monthNum);
        const currYear = currDate.getFullYear();
        const workoutObj = allWorkoutsPerMonth.find(
            (workoutEl) =>
                workoutEl?.month === stringyMonth &&
                workoutEl?.year === currYear
        );
        console.log(workoutObj);
        if (workoutObj !== undefined) {
            workoutObj.numOfWorkouts += 1;
            const newArrayOfWorkoutsCounts = allWorkoutsPerMonth.map(
                (workoutEl) =>
                    workoutEl === workoutObj ? workoutObj : workoutEl
            );
            setAllWorkoutsPerMonth(newArrayOfWorkoutsCounts);
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
        }
    };

    return (
        <>
            <Button onClick={onEndWorkoutClicked}>End Workout</Button>
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
                            videoId={currVideoPlaying.id}
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
