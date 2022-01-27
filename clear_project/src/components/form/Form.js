import React, {useState} from 'react';
import {Container, FormControl, Input, InputLabel} from "@mui/material";

const Form = ({setFilteredUsers,users}) => {
    const [form, setForm] = useState({name: "", username: "", email: ""});

    const getFormData = (e) => {
        const eventData = {...form, [e.target.name]: e.target.value};
        console.log(form)
        setForm({...form, ...eventData});
        getFilter(eventData);
    }
    const getFilter = (data) => {

        let filtered = [...users];

        if (data.name) {
            filtered = filtered.filter(value => value.name.toLowerCase().includes(data.name.toLowerCase()));
        }
        if (data.username) {
            filtered = filtered.filter(value => value.username.toLowerCase().includes(data.username.toLowerCase()));
        }
        if (data.email) {
            filtered = filtered.filter(value => value.email.toLowerCase().includes(data.email.toLowerCase()));
        }
        setFilteredUsers(filtered);
    }


    return (
        <Container sx=
                       {{
                           mb: "1rem"
                       }}
        >

            <FormControl variant={"filled"}>

                <InputLabel htmlFor={"name"}>name</InputLabel>

                <Input
                    onChange={getFormData}
                    value={form.name}
                    type={"text"}
                    name={"name"}
                />

            </FormControl>

            <FormControl variant={"filled"}>

                <InputLabel htmlFor={"username"}>username</InputLabel>

                <Input
                    onChange={getFormData}
                    value={form.username}
                    type={"text"}
                    name={"username"}/>

            </FormControl>

            <FormControl variant={"filled"}>

                <InputLabel htmlFor={"email"}>email</InputLabel>

                <Input
                    onChange={getFormData}
                    value={form.email}
                    type={"text"}
                    name={"email"}/>

            </FormControl>

        </Container>
    );
};

export {Form};
