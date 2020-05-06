/* Styled and modified by Andrew Weith */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import Grey from "@material-ui/core/colors/grey";
import Teal from "@material-ui/core/colors/teal";
import { withStyles } from "@material-ui/core/styles/";
import Grid from "@material-ui/core/Grid";
import {useAppContext} from "../libs/contextLib";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";

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

/* Class component modified from project found at https://github.com/bitlabstudio/blogpost-react-websocket-chat */
class ChatInput extends Component {
    static propTypes = {
        onSubmitMessage: PropTypes.func.isRequired,
    }
    state = {
        message: '',
    }

    render() {

        const { classes } = this.props;

        return (
            <form
                action="."
                onSubmit={e => {
                    e.preventDefault()
                    this.props.onSubmitMessage(this.state.message)
                    this.setState({ message: '' })
                }}
            >
                <Grid container xs={12} className={classes.textGrid}>
                    <TextField
                        variant={"outlined"}
                        margin={"normal"}
                        color={'secondary'}
                        type={'text'}
                        placeholder={'Enter message'}
                        className={classes.textField}
                        id={'message'}
                        value={this.state.message}
                        onChange={e => this.setState({message: e.target.value})}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        /*className={classes.submit}*/
                        value={'Send'}
                    >
                        Send
                    </Button>
                </Grid>
            </form>
        )
    }
}

export default withStyles(useStyles)(ChatInput);