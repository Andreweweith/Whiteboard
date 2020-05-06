/* Class component used from project found at https://github.com/bitlabstudio/blogpost-react-websocket-chat */
/* Modified by Andrew Weith to include styling and function to meet the needs of our application */

import React, { Component } from 'react'
import ChatInput from '../components/ChatInput';
import ChatMessage from '../components/ChatMessage'
import TextField from "@material-ui/core/TextField";
import {useAppContext} from "../libs/contextLib";
import { withStyles } from "@material-ui/core/styles/";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grey from "@material-ui/core/colors/grey";
import Teal from "@material-ui/core/colors/teal";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const URL = 'ws://localhost:3030'

const useStylesLabel = makeStyles(theme => ({
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
    nameLabel: {
        textTransform: 'uppercase'
    }
}));

const useStyles = theme => ({
    root: {
        //backgroundColor: Grey[900],
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: theme.spacing(5),
        //paddingTop: '10%',
        height: '100vh',
        maxHeight: '100vh',
        minHeight: '100vh',
        width: '80vw',
        minWidth: '80vw',
        maxWidth: '80vw',
        '& > *': {
            //margin: theme.spacing(1),
            width: '60%',
            maxWidth: '60%',
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
                borderColor: Teal.A700,
            },
            '&.Mui-focused fieldset': {
                borderColor: Teal.A400,
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
});

var classStateName = '';

export function GetName() {
    const { isAuthenticated, userHasAuthenticated, name, setName, userEmail, setUserEmail } = useAppContext();

    const [stateIsAuthenticated, setStateIsAuthenticated] = isAuthenticated;
    const [stateName, setStateName] = name;
    const [stateUserEmail, setStateUserEmail] = userEmail;

    const classes = useStylesLabel();

    classStateName = name.toString();

    return (
        <Typography variant='title' color='secondary' className={classes.nameLabel}>
            <Box fontSize={24} fontWeight='bold' letterSpacing={4}><u>Current User:  { name }</u></Box>
        </Typography>
    )
}

class ChatWindow extends Component {

    state = {
        name: String,
        messages: [],
    }


    ws = new WebSocket(URL)

    componentDidMount() {
        this.ws.onopen = () => {
            var finalName = classStateName.split(',');

            // on connecting, do nothing but log it to the console
            this.state.name = finalName[0];

            /* ************************************************************************************* */
            /* This pullmessages segment was contributed by Connor Walsh, unused in final presentation
            * as it is not fully functional within the application in time for presentation. */

            /*fetch("http://localhost:4000/pullmessages/", {
                method: 'POST'
            })
                .then(res => res.json())
                .then(JSON => {
                    let x = 0;
                    while(x < 2)
                    {
                        const msg = { name: this.state.name, message: JSON.all_messages[x] }
                        this.addMessage(msg)
                        x++;
                    }
                });*/
            /* ************************************************************************************* */

            console.log('connected')
        }

        this.ws.onmessage = evt => {
            // on receiving a message, add it to the list of messages
            const message = JSON.parse(evt.data)
            this.addMessage(message)
        }

        this.ws.onclose = () => {
            console.log('disconnected')
            // automatically try to reconnect on connection loss
            this.setState({
                ws: new WebSocket(URL),
            })
        }
    }

    addMessage = message =>
        this.setState(state => ({ messages: [message, ...state.messages] }))

    submitMessage = messageString => {

        // on submitting the ChatInput form, send the message, add it to the list and reset the input
        const message = { name: this.state.name, message: messageString }
        this.ws.send(JSON.stringify(message))
        this.addMessage(message)
    }

    render() {

        const { classes } = this.props;

        return (
            <div>
                <Grid container xs={12} className={classes.root}>
                    <Paper elevation={4} className={classes.chatArea}>
                        <Grid container xs={12} direction={'column'}>
                            <GetName/>

                            <Grid container xs={12} className={classes.textGrid}>
                                <Grid container xs={12} className={classes.messageGrid}>
                                    {this.state.messages.map((message, index) =>
                                        <ChatMessage
                                            key={index}
                                            message={message.message}
                                            name={message.name}
                                        />,
                                    )}
                                </Grid>
                                <ChatInput
                                    ws={this.ws}
                                    onSubmitMessage={messageString => this.submitMessage(messageString)}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </div>
        )
    }
}

export default withStyles(useStyles)(ChatWindow);