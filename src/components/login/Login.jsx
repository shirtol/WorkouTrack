import { useState } from "react";
import { useFirebase } from "../../context/FirebaseContext";

const Login = ({ location, history }) => {
    const { signIn, currentUser } = useFirebase();

    if (currentUser) {
        history.goBack();
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
