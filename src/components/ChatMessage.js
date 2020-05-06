/* This file used from project found at https://github.com/bitlabstudio/blogpost-react-websocket-chat */

import React from 'react';

/* Modified by Alec Comley */

const output = ":";

export default ({ name, message }) =>
    <p>
        <strong>{ name+output }</strong> <em>{ message }</em>
    </p>