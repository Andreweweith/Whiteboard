import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import { fontWeight, letterSpacing, fontStyle, fontSize } from '@material-ui/system';
import {teal} from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import {FormControlLabel} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        spacing: 2,
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const NavBar = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='title' color='secondary'>
                        <Box fontWeight='bold' letterSpacing={8}>WHITEBOARD</Box>
                        <Typography variant='subtitle2' color='secondary'>
                            <Box fontStyle='italic' fontSize={12}>"It's not Blackboard"</Box>
                        </Typography>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default NavBar;