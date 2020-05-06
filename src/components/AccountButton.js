import React from "react";
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Link} from "react-router-dom";

/* Contributed by Alec Comley { start } ---------> */

const AccountButton = () => {
    return (
        <div>
            <Button component={Link} to={'/home/account'}>
                <AccountCircle/>
            </Button>
        </div>
    )
};

export default AccountButton;

/* <------- { end } Contributed by Alec Comley */