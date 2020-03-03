import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grey from '@material-ui/core/colors/grey';
import Teal from '@material-ui/core/colors/teal';

const useStyles = makeStyles({
    button: {
        background: Grey[900],
        borderRadius: '100%',
        border: 0,
        color: Teal[300],
        height: 60,
        width: 30,
        //padding: '0 30px',
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
});

const HighlightedButton = () => {
    const classes = useStyles();

    return (
        <Button className={classes.button}>
            {'Class'}
        </Button>
    );
};

export default HighlightedButton;