import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FirebaseProvider from "./context/FirebaseContext";
import ExercisesProvider from "./context/ExercisesContext";
import PlaylistsProvider from "./context/PlaylistsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <FirebaseProvider>
            <ExercisesProvider>
                <PlaylistsProvider>
                    <App />
                </PlaylistsProvider>
            </ExercisesProvider>
        </FirebaseProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
