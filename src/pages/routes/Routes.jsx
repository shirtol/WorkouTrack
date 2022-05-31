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

const Routes = () => {
    return (
        <div className="main-container">
            <Navbar></Navbar>
            <Example></Example>
            <div className="page-container">
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/schedule" component={Schedule}></Route>
                    <Route
                        exact
                        path="/playlists"
                        component={Playlists}
                    ></Route>
                    <Route
                        exact
                        path="/statistics"
                        component={Statistics}
                    ></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Routes;
