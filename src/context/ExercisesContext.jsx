import React, { useCallback, useContext, useEffect, useState } from "react";
import { getAllCollectionData } from "../utils/firebaseUtils";
import { useFirebase } from "./FirebaseContext";

const ExercisesContext = React.createContext();

export const useExercises = () => useContext(ExercisesContext);

const ExercisesProvider = ({ children }) => {
    const { db, currentUser } = useFirebase();

    const [allExercises, setAllExercises] = useState([]);

    const getAllExercisesWrapper = useCallback(async () => {
        if (db !== undefined) {
            const allData = await getAllCollectionData(
                db,
                "workout",
                currentUser
            );
            const mappedAllData = allData?.map((exercise) => ({
                ...exercise,
                endDate: new Date(exercise.endDate.seconds * 1000),
                startDate: new Date(exercise.startDate.seconds * 1000),
            }));
            setAllExercises(mappedAllData);
        }
    }, [currentUser, db]);

    useEffect(() => {
        getAllExercisesWrapper();
    }, [db, currentUser, getAllExercisesWrapper]);

    const value = { allExercises, setAllExercises };
    return (
        <ExercisesContext.Provider value={value}>
            {children}
        </ExercisesContext.Provider>
    );
};

export default ExercisesProvider;
