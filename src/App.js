import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.scss';
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';
import Box from '@material-ui/core/Box';
import { flexbox } from '@material-ui/system';
import HighlightedButton from './components/HighlightedButton';
import VerticalTabs from "./components/TabPanel";

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
          <NavBar />
          <Box height="300%">
              <VerticalTabs></VerticalTabs>
          </Box>

          {/*<Box bgcolor='background.paper' display='flex' flexWrap='wrap'
               justifyContent='center' alignItems='center' style={{ margin: '20px'}}>
              <HighlightedButton></HighlightedButton>
          </Box>*/}
        </div>
      </ThemeProvider>
  )
}

export default App;
