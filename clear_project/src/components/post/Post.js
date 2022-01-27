import React from 'react';
import {Box, Card} from "@mui/material";

const Post = ({post:{id, title,body}}) => {

    return (
        <Card
            sx={{
                m: "1rem",
                p: ".5rem",
                bgcolor: "#fff59d"
        }}>

            <Box>id: {id}</Box>
            <Box>{title}</Box>
            <Box>{body}</Box>

        </Card>
    );
};

export {Post};
