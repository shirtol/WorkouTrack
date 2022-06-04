import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import FirebaseProvider from "./context/FirebaseContext";
import ExercisesProvider from "./context/ExercisesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        {/* <React.StrictMode> */}
        <FirebaseProvider>
            <ExercisesProvider>
                <App />
            </ExercisesProvider>
        </FirebaseProvider>

        {/* </React.StrictMode> */}
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
