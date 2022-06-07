import React from "react";
import Lottie from "lottie-react";
import "./spinner.css";

import spinner from "../../assets/animations/spinner.json";

const Spinner = ({ isShown }) => {
    return (
        isShown && (
            <Lottie className="lottie-spinner" animationData={spinner} loop />
        )
    );
};

export default Spinner;
