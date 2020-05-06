/* Created and written by Andrew Weith */
/* Used snippets of code for theming available at https://material-ui.com/ and for React Context from https://serverless-stack.com/ */

import React, { useState } from 'react';
import './App.scss';
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';
import Routes from "./Routes";
import { AppContext } from './libs/contextLib';

function App() {
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    const [name, setName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                    primary: { light: grey[300], main: grey[900], dark: grey[900] },
                    secondary: { light: teal[300], main: teal.A200, dark: teal.A200 },
                },
            }),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div>
                <AppContext.Provider value={{
                    isAuthenticated: [isAuthenticated, userHasAuthenticated],
                    name: [name, setName],
                    userEmail: [userEmail, setUserEmail]
                }}>
                    <Routes />
                </AppContext.Provider>
            </div>
        </ThemeProvider>
    )
}

export default App;

