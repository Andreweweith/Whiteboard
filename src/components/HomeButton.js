import React from "react";
import Button from '@material-ui/core/Button';
import Home from '@material-ui/icons/Home';
import {Link} from "react-router-dom";

const HomeButton = () => {
    return (
        <div>
            <Button component={Link} to={'/home'}>
                <Home/>
            </Button>
        </div>
    )
};

export default HomeButton;