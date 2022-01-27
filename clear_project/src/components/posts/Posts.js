import React, {useEffect, useState} from 'react';

import {postsService} from "../../services/posts.service";
import {Container} from "@mui/material";
import {Post} from "../post/Post";

const Posts = ({id}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getById(id)
            .then(value => setPosts(value))
    }, [id])


    return (
        <Container>
            {
                posts.map(value =>
                    <Post
                        key={value.id}
                        post={value}
                    />)
            }
        </Container>
    );
};

export default Posts;
