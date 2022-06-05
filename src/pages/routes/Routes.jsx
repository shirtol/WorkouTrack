import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Home from "../home/Home";
import Schedule from "../schedule/Schedule";
import Playlists from "../playlists/Playlists";
import Statistics from "../statistics/Statistics";
import "./Routes.css";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useFirebase } from "../../context/FirebaseContext";
import AuthenticatedRoute from "../authenticatedRoute/AuthenticatedRoute";
import Login from "../../components/login/Login";
import CreatePlaylist from "../createPlaylist/CreatePlaylist";
import PlaylistCreationNavbar from "../../components/playlistCreationNavbar/PlaylistCreationNavbar";

const Routes = () => {
    return (
        <div className="main-container">
            <div className="page-container">
                <Switch>
                    <AuthenticatedRoute
                        exact
                        path="/create-playlist"
                        renderChild={(location, ...props) => {
                            console.log(location);
                            return (
                                <CreatePlaylist
                                    location={location}
                                    {...props}
                                ></CreatePlaylist>
                            );
                        }}
                    />
                    <Route component={DefaultContainer}></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Routes;

const DefaultContainer = () => (
    <>
        <Navbar></Navbar>
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
        <Route exact path="/login" component={Login}></Route>
    </>
);
