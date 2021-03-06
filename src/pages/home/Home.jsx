import React from "react";
import NextWorkoutBox from "../../components/homePageBox/nextWorkoutBox/NextWorkoutBox";
import NoWorkoutTodayBox from "../../components/homePageBox/noWorkoutTodayBox/NoWorkoutTodayBox";
import { StyledHomePageBox } from "../../components/homePageBox/StyledHomePageBox";
import PlaylistItem from "../../components/playlistItem/PlaylistItem";
import { StyledFlexWrapper } from "../../components/wrappers/flexWrapper/StyledFlexWrapper";
import { useExercises } from "../../context/ExercisesContext";
import { getKeyByValue } from "../../utils/utils";
import workoutEnvironments from "../../utils/workoutEnvironments";
import Statistics from "../statistics/Statistics";
import zen from "../../assets/animations/noWorkout.json";
import freestyle from "../../assets/animations/freestyle.json";

const Home = () => {
    const { allExercises } = useExercises();
    const currDate = new Date();

    const getTodayWorkout = () => {
        const todayWorkout = allExercises.find(
            (exercise) =>
                exercise.startDate.toDateString() === currDate.toDateString()
        );
        return todayWorkout;
    };

    const todayWorkout = getTodayWorkout();

    const getAllEquipments = () => {
        let equipmentsArr = [];
        if (todayWorkout !== undefined) {
            equipmentsArr = Object.keys(todayWorkout.equipments).filter(
                (equipment) => {
                    return todayWorkout.equipments[equipment] === true;
                }
            );
        }
        return equipmentsArr;
    };

    const getWorkoutTypes = () => {
        let typesArr = [];
        if (todayWorkout !== undefined) {
            typesArr = Object.keys(todayWorkout.workoutTypes).filter(
                (workoutType) => {
                    return todayWorkout.workoutTypes[workoutType] === true;
                }
            );
        }
        return typesArr;
    };

    const playlistIsEmpty = () => todayWorkout?.playlist.title === "none";

    const hasPlaylist = () => todayWorkout !== undefined && !playlistIsEmpty();

    return (
        <>
            <StyledFlexWrapper
                flexDirectionTablet="column"
                height="100%"
                heightTablet="90vh"
                flexDirectionMobileL="column"
                heightMobileL="100vh"
                mobileLgap="7rem"
                overflowY="scroll"
                marginTopTablet="6rem"
            >
                <StyledFlexWrapper
                    flexDirection="column"
                    width="30%"
                    tabletWidth="80%"
                    justifyContent="space-between"
                    height="92.2%"
                    flexDirectionMobileL="column"
                    heightMobileL="40%"
                >
                    <StyledHomePageBox width="100%" height="60%">
                        {todayWorkout === undefined ? (
                            <NoWorkoutTodayBox
                                title="No workout for today"
                                animationData={zen}
                            ></NoWorkoutTodayBox>
                        ) : (
                            <NextWorkoutBox
                                environment={getKeyByValue(
                                    workoutEnvironments,
                                    todayWorkout.environment
                                )}
                                equipments={getAllEquipments().join(", ")}
                                type={getWorkoutTypes().join(", ")}
                            ></NextWorkoutBox>
                        )}
                    </StyledHomePageBox>
                    {!hasPlaylist() ? (
                        <StyledHomePageBox width="100%" height="60%">
                            <NoWorkoutTodayBox
                                title={
                                    playlistIsEmpty()
                                        ? "No playlists set, freestyle!"
                                        : "Let your muscles rest and enjoy a day off"
                                }
                                animationData={
                                    playlistIsEmpty() ? freestyle : zen
                                }
                            ></NoWorkoutTodayBox>
                        </StyledHomePageBox>
                    ) : (
                        <StyledHomePageBox width="100%" height="60%">
                            <PlaylistItem
                                alignSelf="center"
                                boxShadow="none"
                                playlist={todayWorkout.playlist}
                                hasDeleteIcon={false}
                            ></PlaylistItem>
                        </StyledHomePageBox>
                    )}
                </StyledFlexWrapper>
                <StyledHomePageBox
                    width="60%"
                    height="90%"
                    tabletOrder="0"
                    tabletWidth="80%"
                    heightMobileL="30%"
                >
                    <Statistics></Statistics>
                </StyledHomePageBox>
            </StyledFlexWrapper>
        </>
    );
};

export default Home;
