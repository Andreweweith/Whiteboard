import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
//import MessageWindow from "./MessageWindow";
import {Link, Route, useHistory, Switch } from "react-router-dom";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grey from "@material-ui/core/colors/grey";
import Teal from "@material-ui/core/colors/teal";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import ListItemText from "@material-ui/core/ListItemText";
import Home from "../components/HomeButton";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import MessageWindow from "./MessageWindow";

const drawerWidth = 240;

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
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        flexDirection: 'column',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(11) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(11) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toggleButtonContainer: {
        flexDirection: 'column',
    },
    navButtons: {
        marginLeft: '3px',
    },
    button: {
        background: Grey[900],
        borderRadius: '100%',
        border: 0,
        color: Teal[300],
        minHeight: 60,
        minWidth: 60,
        maxHeight: 60,
        maxWidth: 60,
        //padding: '0 30px',
        marginLeft: '3px',
        marginRight: '20px',
        marginTop: '10px',
        marginBottom: '10px',
        boxShadow: '3px rgb(0,0,0,0.35)',

        '&:hover': {
            boxShadow: '0px 0px 21px 3px rgba(0,150,136,0.50)',
            transition: 'opacity 0.3s ease-in-out',
            //backgroundColor: Grey[800],
        },

        '&:focus': {
            boxShadow: '0px 0px 21px 6px rgba(0,150,136,1)',
            transition: 'opacity 0.3s ease-in-out',
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
    }
}));

/*function PageShell(Page, previous) {
    return props => (
        <div className="page">
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={600}
                transitionName={props.match.path === "/class-1" ? "SlideIn" : "SlideOut"}
            >
                <Page {...props} />
            </ReactCSSTransitionGroup>
        </div>
    );
};*/

/*function MessageWindow() {
    const classes = useStyles();

    const [content, setContent] = useState("Home");

    return (
        <Grid container xs={12} className={classes.root}>
            <Paper elevation={4} className={classes.chatArea}>
                <Grid container xs={12} direction={'column'}>
                    <Typography variant='title' color='secondary'>
                        <Box fontSize={24} fontWeight='bold' letterSpacing={8}>{content}</Box>
                        {/!*<Typography variant='subtitle2' color='secondary'>
                            <Box fontStyle='italic' fontSize={18}>"It's not Blackboard"</Box>
                        </Typography>*!/}
                    </Typography>
                    <Grid container xs={11} className={classes.textGrid}>
                        <Grid container xs={11} className={classes.messageGrid}>
                            <span className={classes.textRight}>Hey!</span>
                            <span className={classes.textLeft}>This is sample text!</span>
                        </Grid>
                        <TextField id='outlined-basic' label='Message'
                                   variant='outlined'
                                   className={classes.textField}
                                   InputLabelProps={classes.textLabel}/>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}*/

function HomeWindow({ match }) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const history = useHistory();
    //let match = useRouteMatch();

    /*function MessageWindowOne(){
        return (
            <MessageWindow setContent={"Class 1"}/>
        );
    }
    function MessageWindowTwo(){
        return (
            <MessageWindow content={"Class 2"}/>
        );
    }
    function MessageWindowThree(){
        return (
            <MessageWindow content={"Class 3"}/>
        );
    }
    function MessageWindowFour(){
        return (
            <MessageWindow content={"Class 4"}/>
        );
    }*/

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Grid container xs={12} directon={'column'}>

                {/* APPBAR CONTAINER */}
                <Grid container xs={12}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: open,
                        })}
                    >
                        <Toolbar>
                            <IconButton
                                color="secondary"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                className={clsx(classes.menuButton, {
                                    [classes.hide]: open,
                                })}
                            >
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
                </Grid>

                {/* HOME WINDOW CONTAINER */}
                <Grid container xs={12}>

                    {/* BUTTON DRAWER CONTAINER */}
                    <Grid container xs={1}>
                        <Drawer
                            variant="permanent"
                            className={clsx(classes.drawer, {
                                [classes.drawerOpen]: open,
                                [classes.drawerClose]: !open,
                            })}
                            classes={{
                                paper: clsx({
                                    [classes.drawerOpen]: open,
                                    [classes.drawerClose]: !open,
                                }),
                            }}
                        >
                            <div className={classes.toolbar}>
                                <IconButton onClick={handleDrawerClose}>
                                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                                </IconButton>
                            </div>
                            <Divider />
                            <List>
                                {/*{['First Class', 'Second Class', 'Third Class?', 'Fourth Class.'].map((text, index) => (*/}
                                <ToggleButtonGroup class={'toggleButtonContainer'}>
                                    <ListItem>
                                        <Button
                                            component={Link} to={'/home/class-1'}
                                            buttonId="class-1"
                                            //onClick={handleClick}
                                            className={classes.button}>
                                            Class
                                        </Button>
                                        <ListItemText primary={'First Class'} />
                                    </ListItem>
                                    <ListItem>
                                        <Button
                                            component={Link} to={'/home/class-2'}
                                            buttonId="class-2"
                                            //onClick={handleClick}
                                            className={classes.button}>
                                            Class
                                        </Button>
                                        <ListItemText primary={'Second Class'} />
                                    </ListItem>
                                    <ListItem>
                                        <Button
                                            component={Link} to={'/home/class-3'}
                                            buttonId="class-3"
                                            //onClick={handleClick}
                                            className={classes.button}>
                                            Class
                                        </Button>
                                        <ListItemText primary={'Third Class?'} />
                                    </ListItem>
                                    <ListItem>
                                        <Button
                                            component={Link} to={'/home/class-4'}
                                            buttonId="class-4"
                                            //onClick={handleClick}
                                            className={classes.button}>
                                            Class
                                        </Button>
                                        <ListItemText primary={'Fourth Class.'} />
                                    </ListItem>
                                </ToggleButtonGroup>
                                {/*))}*/}
                            </List>
                            <Divider />
                            <Grid container direction='column' xs={7}
                                  alignContent={'center'}
                                  justify={'flex-end'}
                                  classes={'navButtons'}>
                                <Grid container direction='row' xs={1}>
                                    <Home> </Home>
                                </Grid>
                            </Grid>
                        </Drawer>
                    </Grid>


                    {/* CONTENT AREA CONTAINER */}
                    <Grid container xs={11}>
                        <Switch>
                            <Route path='/home/class-1'>
                                <MessageWindow buttonId={'Class-1'}/>
                            </Route>
                            <Route path='/home/class-2'>
                                <MessageWindow buttonId={'Class-2'}/>
                            </Route>
                            <Route path='/home/class-3'>
                                <MessageWindow buttonId={'Class-3'}/>
                            </Route>
                            <Route path='/home/class-4'>
                                <MessageWindow buttonId={'Class-4'}/>
                            </Route>
                        </Switch>
                        {/*<MessageWindow />*/}
                        {/*<Routes />*/}
                        {/*<LoginWindow />*/}
                        {/*<Switch>
                            <Route path="/home/class-1" component={PageShell(MessageWindowOne)}/>
                            <Route path="/home/class-2" component={PageShell(MessageWindowTwo)}/>
                            <Route path="/home/class-3" component={PageShell(MessageWindowThree)}/>
                            <Route path="/home/class-4" component={PageShell(MessageWindowFour)}/>
                        </Switch>*/}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default HomeWindow;