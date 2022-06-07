import React from "react";
import NextWorkoutBox from "../../components/homePageBox/nextWorkoutBox/NextWorkoutBox";
import NoWorkoutTodayBox from "../../components/homePageBox/noWorkoutTodayBox/NoWorkoutTodayBox";
import { StyledHomePageBox } from "../../components/homePageBox/StyledHomePageBox";
import { StyledTodayWorkoutTitle } from "../../components/homePageBox/StyledTodayWorkoutTitle";
import PlaylistItem from "../../components/playlistItem/PlaylistItem";
import { StyledFlexWrapper } from "../../components/wrappers/flexWrapper/StyledFlexWrapper";
import { useExercises } from "../../context/ExercisesContext";
import { getKeyByValue } from "../../utils/utils";
import workoutEnvironments from "../../utils/workoutEnvironments";
import Statistics from "../statistics/Statistics";
const Home = () => {
    const { allExercises } = useExercises();
    const currDate = new Date();

    const getTodayWorkout = () => {
        const todayWorkout = allExercises.find(
            (exercise) =>
                exercise.startDate.toDateString() === currDate.toDateString()
        );
        console.log(todayWorkout);
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
            console.log(equipmentsArr);
        }
        return equipmentsArr;
        // return (
        //     todayWorkout === undefined &&
        //     Object.keys(todayWorkout.equipments).filter((equipment) => {
        //         return todayWorkout.equipment[equipment] === true;
        //     })
        // );
    };

    const getWorkoutTypes = () => {
        let typesArr = [];
        if (todayWorkout !== undefined) {
            typesArr = Object.keys(todayWorkout.workoutTypes).filter(
                (workoutType) => {
                    return todayWorkout.workoutTypes[workoutType] === true;
                }
            );
            console.log(typesArr);
        }
        return typesArr;
    };

    return (
        <StyledFlexWrapper>
            <StyledFlexWrapper flexDirectionTablet="column">
                <StyledFlexWrapper
                    flexDirection="column"
                    width="30%"
                    tabletWidth="80%"
                >
                    <StyledHomePageBox width="100%" height="35vh">
                        {todayWorkout === undefined ? (
                            <NoWorkoutTodayBox></NoWorkoutTodayBox>
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
                    <StyledHomePageBox width="100%" height="35vh">
                        {todayWorkout === undefined ? (
                            <NoWorkoutTodayBox></NoWorkoutTodayBox>
                        ) : (
                            <PlaylistItem
                                playlist={todayWorkout.playlist}
                                hasDeleteIcon={false}
                            ></PlaylistItem>
                        )}
                    </StyledHomePageBox>
                </StyledFlexWrapper>
                <StyledHomePageBox width="60%" height="80vh">
                    <Statistics></Statistics>
                </StyledHomePageBox>
            </StyledFlexWrapper>
        </StyledFlexWrapper>
    );
};

export default Home;
