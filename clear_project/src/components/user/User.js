import React from 'react';

import {Card} from "@mui/material";

const User = ({user:{id, name, username, email}}) => {

    return (
        <Card
        sx={{
            display: "flex",
            m: "0.8rem",
            p: "0.5rem"
        }}>
            <div> {id}) {name} -</div>

            <div> {username} -</div>

            <div> {email} </div>

        </Card>
    );
};

export {User};