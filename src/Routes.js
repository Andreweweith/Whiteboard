import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/LoginWindow";
import Signup from "./containers/SignupWindow";
import Landing from "./containers/LandingWindow";
import MessageWindow from "./containers/MessageWindow";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import HomeWindow from "./containers/HomeWindow";

export default function Routes({ appProps }) {
    return (
        <Switch>
            <AppliedRoute path="/" exact component={Landing} appProps={appProps} />
            <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
            <AppliedRoute path='/signup' component={Signup} appProps={appProps} />
            <AppliedRoute path="/home" component={HomeWindow} appProps={appProps} />
            {/* Finally, catch all unmatched routes */}
            <Route component={NotFound} />
        </Switch>
    );
}