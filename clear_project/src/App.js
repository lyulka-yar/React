import React, {useEffect, useState} from 'react';
import {Container} from "@mui/material";

import {Form, Users} from "./components";
import {usersService} from "./services/users.service";

const App = () => {

    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(response => {
                setUsers(response);
                setFilteredUsers(response);
            }
        );
    }, []);



    return (
        <Container
            sx=
                {{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    bgcolor: "lightBlue"
                }}
        >
            <Form
                users={users}
                setFilteredUsers={setFilteredUsers}
            />

            <Users
                users={filteredUsers}
            />

        </Container>
    );
};

export default App;
