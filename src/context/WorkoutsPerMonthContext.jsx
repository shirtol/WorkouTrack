import React, { useCallback, useContext, useEffect, useState } from "react";
import { getAllCollectionData } from "../utils/firebaseUtils";
import { useFirebase } from "./FirebaseContext";

const WorkoutsPerMonthContext = React.createContext();

export const useWorkoutsPerMonth = () => useContext(WorkoutsPerMonthContext);

const WorkoutsPerMonthProvider = ({ children }) => {
    const { db, currentUser } = useFirebase();
    const [allWorkoutsPerMonth, setAllWorkoutsPerMonth] = useState([]);

    const getAllWorkoutsPerMonthWrapper = useCallback(async () => {
        if (db !== undefined) {
            const allData = await getAllCollectionData(
                db,
                "workoutsPerMonth",
                currentUser
            );

            setAllWorkoutsPerMonth(allData);
        }
    }, [currentUser, db]);

    useEffect(() => {
        getAllWorkoutsPerMonthWrapper();
    }, [db, currentUser, getAllWorkoutsPerMonthWrapper]);

    const value = { allWorkoutsPerMonth, setAllWorkoutsPerMonth };

    return (
        <WorkoutsPerMonthContext.Provider value={value}>
            {children}
        </WorkoutsPerMonthContext.Provider>
    );
};

export default WorkoutsPerMonthProvider;
