/* Created and written by Andrew Weith */
/* Based on code and information from tutorial found at https://serverless-stack.com/chapters/handle-routes-with-react-router.html */

import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/LoginWindow";
import Signup from "./containers/SignupWindow";
import Landing from "./containers/LandingWindow";
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