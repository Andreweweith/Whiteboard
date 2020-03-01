import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.scss';
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';

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
        </div>
      </ThemeProvider>
  )
}

/*const useStyles = makeStyles({
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});*/

export default App;
