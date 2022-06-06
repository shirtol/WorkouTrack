import React from "react";
import { useFirebase } from "../../context/FirebaseContext";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";

const AuthenticatedRoute = ({
    children,
    location,
    history,
    renderChild,
    ...props
}) => {
    const { currentUser } = useFirebase();
    console.log(location);

    return (
        <Route
            {...props}
            render={({ location }) => {
                console.log(location);
                return currentUser ? (
                    children || renderChild(location, history, props)
                ) : (
                    <Redirect to="/login" push={true}></Redirect>
                );
            }}
        ></Route>
    );
};

export default AuthenticatedRoute;
