import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Grey from "@material-ui/core/colors/grey";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Teal from '@material-ui/core/colors/teal';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {useAppContext} from "../libs/contextLib";

const useStyles = makeStyles(theme => ({
    root: {
        //backgroundColor: Grey[900],
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(5),
        //paddingTop: '10%',
        height: '100vh',
        maxHeight: '100vh',
        width: '100vw',
        '& > *': {
            //margin: theme.spacing(1),
            width: '90%',
            maxWidth: '90%',
            //height: theme.spacing(100),
        },
    },
    chatArea: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: Grey[300],
        padding: theme.spacing(5),
    },
    textGrid: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'center',
        paddingTop: theme.spacing(50),
    },
    textField: {
        marginTop: theme.spacing(3),
        color: Teal[300],
        alignSelf: 'left',

        '& label.Mui-focused': {
            color: Teal[300],
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: Teal[300],
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: Grey[700],
                color: Grey[100],
            },
            '&:hover fieldset': {
                borderColor: Teal[400],
            },
            '&.Mui-focused fieldset': {
                borderColor: Teal[700],
            },
        },
    },
    messageGrid: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        spacing: theme.spacing(5)
    },
    textLeft: {
        justify: 'left',
        paddingLeft: '5%',
        //paddingRight: theme.spacing(20),
        //marginRight: theme.spacing(20),
        //padding: theme.spacing(10),
    },
    textRight: {
        justify: 'right',
        //paddingRight: theme.spacing(2),
        paddingLeft: '95%',
        //marginLeft: theme.spacing(20),
        //padding: theme.spacing(10),
    },
    accountText:{
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "15px"
    }
}));

/* Created and written by Alec Comley */
/* Using styling and React Context code segments contributed by Andrew Weith */

function AccountWindow(props) {

    const classes = useStyles();
    const { isAuthenticated, userHasAuthenticated, name, setName, userEmail, setUserEmail } = useAppContext();

    const [stateIsAuthenticated, setStateIsAuthenticated] = isAuthenticated;
    const [stateName, setStateName] = name;
    const [stateUserEmail, setStateUserEmail] = userEmail;

    return (
        <Grid container xs={12} className={classes.root}>
            <Paper elevation={4} className={classes.chatArea}>
                <Grid container xs={12} direction={'column'}>
                    <Typography variant='title' color='secondary'>
                        <Box fontSize={24} fontWeight='bold' letterSpacing={8}><u>Account Info</u></Box>
                    </Typography>
                    <Typography variant='title' className={classes.accountText}>
                        <Box fontSize={18} fontWeight='bold' letterSpacing={8}>Name: { name }</Box>
                        <Box fontSize={18} fontWeight='bold' letterSpacing={8}>Email: { userEmail }</Box>
                    </Typography>
                </Grid>
            </Paper>

        </Grid>
    )
}

export default AccountWindow;