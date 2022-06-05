import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Home from "../home/Home";
import Schedule from "../schedule/Schedule";
import Playlists from "../playlists/Playlists";
import Statistics from "../statistics/Statistics";
import "./Routes.css";
import Example from "../../components/lottie/Lottie";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useFirebase } from "../../context/FirebaseContext";
import AuthenticatedRoute from "../authenticatedRoute/AuthenticatedRoute";
import Login from "../../components/login/Login";
import CreatePlaylist from "../createPlaylist/CreatePlaylist";

const Routes = () => {
    return (
        <div className="main-container">
            <Navbar></Navbar>
            <Example></Example>
            <div className="page-container">
                <Switch>
                    <AuthenticatedRoute exact path="/">
                        <Home></Home>
                    </AuthenticatedRoute>
                    <AuthenticatedRoute exact path="/schedule">
                        <Schedule></Schedule>
                    </AuthenticatedRoute>
                    <AuthenticatedRoute exact path="/playlists">
                        <Playlists></Playlists>
                    </AuthenticatedRoute>
                    <AuthenticatedRoute exact path="/statistics">
                        <Statistics></Statistics>
                    </AuthenticatedRoute>
                    <AuthenticatedRoute exact path="/create-playlist">
                        <CreatePlaylist></CreatePlaylist>
                    </AuthenticatedRoute>
                    <Route exact path="/login" component={Login}></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Routes;
