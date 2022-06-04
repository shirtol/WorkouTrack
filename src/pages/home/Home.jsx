import React from "react";
import { useFirebase } from "../../context/AuthContext";
import { addNewDoc } from "../../utils/addNewDoc";

const Home = () => {
    const { db } = useFirebase();
    const onClick = async () => {
        await addNewDoc(db, {});
    };
    return (
        <div className="home-page-container">
            Home
            <button onClick={onClick}>save</button>
        </div>
    );
};

export default Home;
