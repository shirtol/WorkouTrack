import { useState } from "react";
import { useFirebase } from "../../context/FirebaseContext";

const Login = ({ location, history }) => {
    const { signIn, currentUser } = useFirebase();

    if (currentUser) {
        const currPath = location.pathname;
        if (currPath === "/" || currPath === "/login") {
            history.push("/");
        }
    }

    return (
        <div>
            <button className="button" onClick={signIn}>
                <i className="fab fa-google"></i>Sign in with google
            </button>
        </div>
    );
};

export default Login;
