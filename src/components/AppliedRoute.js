/* Created and contributed by Andrew Weith */
/* Based on code and information from tutorial found at https://serverless-stack.com/ */
/* Code can be found at https://github.com/AnomalyInnovations/serverless-stack-demo-client/blob/master/src/components/AppliedRoute.js */

import React from "react";
import { Route } from "react-router-dom";

export default function AppliedRoute({ component: C, appProps, ...rest }) {
    return (
        <Route {...rest} render={props => <C {...props} {...appProps} />} />
    );
}