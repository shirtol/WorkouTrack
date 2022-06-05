import React from "react";
import { useFirebase } from "../../context/FirebaseContext";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";

const AuthenticatedRoute = ({ children, location, renderChild, ...props }) => {
    const { currentUser } = useFirebase();

    return (
        <Route
            {...props}
            render={() => {
                return currentUser ? (
                    children || renderChild(location, props)
                ) : (
                    <Redirect to="/login" push={true}></Redirect>
                );
            }}
        ></Route>
    );
};

export default AuthenticatedRoute;
