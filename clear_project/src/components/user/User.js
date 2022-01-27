import React from 'react';
import {Button, Card, Container} from "@mui/material";

const User = ({user: {id, name}, getId, setUserPostsId, changeStatus}) => {
    return (
        <Container>
            {
                <Card sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    bgcolor: "#fff59d",
                    p: "0.5rem 1rem",
                    m: "0.5rem 1rem",
                    maxWidth: "50vw"
                }}>

                    <span>{id})</span>
                    {name}

                    <Button
                        variant={"contained"}
                        onClick={()=> {
                            getId(id);
                            setUserPostsId(id);
                            changeStatus(false)
                        }}>
                        show more
                    </Button>
                </Card>
            }
        </Container>
    );
};

export default User;