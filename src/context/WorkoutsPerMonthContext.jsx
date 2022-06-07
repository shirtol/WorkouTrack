import React, { useContext, useEffect, useState } from "react";
import { getAllCollectionData } from "../utils/firebaseUtils";
import { useFirebase } from "./FirebaseContext";

const WorkoutsPerMonthContext = React.createContext();

export const useWorkoutsPerMonth = () => useContext(WorkoutsPerMonthContext);

const WorkoutsPerMonthProvider = ({ children }) => {
    const { db, currentUser } = useFirebase();
    const [allWorkoutsPerMonth, setAllWorkoutsPerMonth] = useState([]);

    const getAllWorkoutsPerMonthWrapper = async () => {
        if (db !== undefined) {
            const allData = await getAllCollectionData(
                db,
                "workoutsPerMonth",
                currentUser
            );

            setAllWorkoutsPerMonth(allData);
        }
    };
    useEffect(() => {
        getAllWorkoutsPerMonthWrapper();
    }, [db, currentUser]);

    const value = { allWorkoutsPerMonth, setAllWorkoutsPerMonth };

    return (
        <WorkoutsPerMonthContext.Provider value={value}>
            {children}
        </WorkoutsPerMonthContext.Provider>
    );
};

export default WorkoutsPerMonthProvider;
