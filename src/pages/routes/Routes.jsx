import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Home from "../home/Home";
import Schedule from "../schedule/Schedule";
import Playlists from "../playlists/Playlists";
import "./Routes.css";
import AuthenticatedRoute from "../authenticatedRoute/AuthenticatedRoute";
import Login from "../../components/login/Login";
import CreatePlaylist from "../createPlaylist/CreatePlaylist";
import WatchPlaylist from "../watchPlaylist/WatchPlaylist";
import HamburgerMenu from "../../components/hamburgerMenu/HamburgerMenu";
import ErrorPage from "../error/ErrorPage/ErrorPage";
import Contact from "../contact/Contact";

const Routes = () => {
    return (
        <div className="main-container">
            <div className="page-container">
                <Switch>
                    <AuthenticatedRoute
                        exact
                        path="/create-playlist"
                        renderChild={(location, history, ...props) => {
                            return (
                                <CreatePlaylist
                                    location={location}
                                    history={history}
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
        <HamburgerMenu></HamburgerMenu>
        <Navbar></Navbar>
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
            <AuthenticatedRoute
                exact
                path="/playlists/:id"
                renderChild={(location, history, ...props) => {
                    return (
                        <WatchPlaylist
                            location={location}
                            history={history}
                            {...props}
                        ></WatchPlaylist>
                    );
                }}
            ></AuthenticatedRoute>
            <AuthenticatedRoute exact path="/contact">
                <Contact></Contact>
            </AuthenticatedRoute>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/*" component={ErrorPage}></Route>
        </Switch>
    </>
);
