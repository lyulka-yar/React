import React from 'react';
import {Button, Card, Stack} from "@mui/material";

const ChosenUser = ({chosenUser: {website, phone, email, address: {street, city}}, status}) => {

    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                width: "30vw",
                textAlign: "center",
                bgcolor: "text.disabled",
                color: "#fff",
            }}>

            <Stack m={"0.5rem"}>website: <span>{website}</span></Stack>
            <Stack m={"0.5rem"}>phone: <span>{phone}</span></Stack>
            <Stack m={"0.5rem"}>email: <span>{email}</span></Stack>
            <Stack m={"0.5rem"}>street: <span>{street}</span></Stack>
            <Stack m={"0.5rem"}>city: <span>{city}</span></Stack>

            <Button
                variant={"contained"}
                color={"info"}
                onClick={() => status(true)}
            >show posts
            </Button>

        </Card>
    );
};

export default ChosenUser;