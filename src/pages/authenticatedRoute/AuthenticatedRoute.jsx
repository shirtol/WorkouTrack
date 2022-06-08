import React, { useEffect, useState } from "react";
import { useFirebase } from "../../context/FirebaseContext";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";

const AuthenticatedRoute = ({
    children,
    location,
    history,
    renderChild,
    ...props
}) => {
    const { signIn, currentUser } = useFirebase();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timeOutId);
    }, []);

    return (
        <Route
            {...props}
            render={({ location, history }) => {
                return currentUser ? (
                    children || renderChild(location, history, props)
                ) : isLoading ? (
                    <Spinner isShown={isLoading}></Spinner>
                ) : (
                    <Redirect to="/login" push={true}></Redirect>
                );
            }}
        ></Route>
    );
};

export default AuthenticatedRoute;
