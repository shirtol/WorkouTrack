import React, { useContext, useEffect, useState } from "react";
import { getAllCollectionData } from "../utils/firebaseUtils";
import { useFirebase } from "./FirebaseContext";

const ExercisesContext = React.createContext();

export const useExercises = () => useContext(ExercisesContext);

const ExercisesProvider = ({ children }) => {
    const { db } = useFirebase();

    const [allExercises, setAllExercises] = useState([]);

    const getAllExercisesWrapper = async () => {
        console.log(db);
        if (db !== undefined) {
            const allData = await getAllCollectionData(db, "workout");
            const mappedAllData = allData.map((exercise) => ({
                ...exercise,
                endDate: new Date(exercise.endDate.seconds * 1000),
                startDate: new Date(exercise.startDate.seconds * 1000),
            }));
            console.log(mappedAllData);
            setAllExercises(mappedAllData);
        }
    };

    useEffect(() => {
        getAllExercisesWrapper();
    }, [db]);

    const value = { allExercises, setAllExercises };
    return (
        <ExercisesContext.Provider value={value}>
            {children}
        </ExercisesContext.Provider>
    );
};

export default ExercisesProvider;
