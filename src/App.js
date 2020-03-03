import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.scss';
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { flexbox } from '@material-ui/system';
import HighlightedButton from './components/HighlightedButton';
import VerticalTabs from "./components/TabPanel";
import SideDrawer from "./components/SideDrawer";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
      () =>
          createMuiTheme({
            palette: {
              type: prefersDarkMode ? 'dark' : 'light',
              primary: { light: grey[300], main: grey[900], dark: grey[900] },
              secondary: { light: teal[300], main: teal[500], dark: teal[700] },
            },
          }),
      [prefersDarkMode],
  );

  // CssBaseline is literally just to get the background color change to apply
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          {/*<NavBar />*/}
          <div>
              <Grid container xs={12}>
                  <Grid container xs={1}    >
                      <SideDrawer>

                      </SideDrawer>
                  </Grid>
                  <Grid container xs={11}>
                      {/*<VerticalTabs>

                      </VerticalTabs>*/}
                  </Grid>
              </Grid>
          </div>
        </div>
      </ThemeProvider>
  )
}

export default App;
