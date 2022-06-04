import React from "react";
import { useFirebase } from "../../context/FirebaseContext";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";

const AuthenticatedRoute = ({ children, ...props }) => {
    const { currentUser } = useFirebase();

    console.log(currentUser);

    return (
        <Route
            {...props}
            render={() => {
                return currentUser ? (
                    children
                ) : (
                    <Redirect to="/login"></Redirect>
                );
            }}
        ></Route>
    );
};

export default AuthenticatedRoute;
