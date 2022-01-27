import React, {useEffect, useState} from 'react';
import {Box, Container} from "@mui/material";

import {usersService} from "../../services/users.service";
import User from "../user/User";
import ChosenUser from "../ChosenUser/ChosenUser";

const Users = ({changeStatus, setUserPostsId}) => {

    const [users, setUsers] = useState([]);
    const [chosenUser, setChosen] = useState(null);

    useEffect(() => {
        usersService.getAll().then(res => setUsers(res))
    }, []);

    function getUserId(id) {
        setChosen(users.find(value => value.id === id));
    }
    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "space-between"
            }}>
            <Box
                sx={{width: "30vw"}}>
                {
                    users.map(value =>
                        <User
                            key={value.id}
                            user={value}
                            getId={getUserId}
                            setUserPostsId={setUserPostsId}
                            changeStatus={changeStatus}
                        />)
                }
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                {
                    chosenUser && <ChosenUser
                        chosenUser={chosenUser}
                        status={changeStatus}/>
                }
            </Box>

        </Container>

    );
};

export default Users;