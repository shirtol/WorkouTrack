import { height } from "@mui/system";
import React from "react";
import BgHomePage from "../../components/bgHomeAnimation/BgHomeAnimation";
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
        }
        return typesArr;
    };

    return (
        <>
            {/* <StyledFlexWrapper> */}
            <StyledFlexWrapper
                flexDirectionTablet="column"
                height="80vh"
                heightTablet="90vh"
                flexDirectionMobileL="column"
                heightMobileL="100vh"
                mobileLgap="7rem"
                overflowY="scroll"
            >
                <StyledFlexWrapper
                    flexDirection="column"
                    width="30%"
                    tabletWidth="80%"
                    justifyContent="space-between"
                    height="100%"
                    flexDirectionMobileL="column"
                    heightMobileL="40%"
                >
                    <StyledHomePageBox width="100%" height="60%">
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
                    {todayWorkout === undefined ? (
                        <NoWorkoutTodayBox></NoWorkoutTodayBox>
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
                    height="97%"
                    tabletOrder="0"
                    tabletWidth="80%"
                    heightMobileL="30%"
                >
                    <Statistics></Statistics>
                </StyledHomePageBox>
            </StyledFlexWrapper>
            {/* </StyledFlexWrapper> */}
        </>
    );
};

export default Home;
