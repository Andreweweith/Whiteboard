import React from "react";
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Link} from "react-router-dom";

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