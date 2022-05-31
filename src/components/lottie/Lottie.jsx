import Lottie from "lottie-react";
import "./Lottie.css";

import background from "../../assets/animations/bg2.json";

const Example = () => {
    return <Lottie className="lottie-bg" animationData={background} loop />;
};

export default Example;
