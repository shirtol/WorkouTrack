import React from "react";
import { useFirebase } from "../../context/FirebaseContext";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";

const AuthenticatedRoute = ({ children, location, ...props }) => {
    const { currentUser } = useFirebase();

    console.log(location.pathname);

    return (
        <Route
            {...props}
            render={() => {
                return currentUser ? (
                    children
                ) : (
                    <Redirect to="/login" push={true}></Redirect>
                );
            }}
        ></Route>
    );
};

export default AuthenticatedRoute;
