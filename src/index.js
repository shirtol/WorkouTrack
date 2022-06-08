import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import FirebaseProvider from "./context/FirebaseContext";
import ExercisesProvider from "./context/ExercisesContext";
import PlaylistsProvider from "./context/PlaylistsContext";
import WorkoutsPerMonthProvider from "./context/WorkoutsPerMonthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <FirebaseProvider>
            <ExercisesProvider>
                <WorkoutsPerMonthProvider>
                    <PlaylistsProvider>
                        <App />
                    </PlaylistsProvider>
                </WorkoutsPerMonthProvider>
            </ExercisesProvider>
        </FirebaseProvider>
    </BrowserRouter>
);
