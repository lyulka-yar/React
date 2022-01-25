import React, {useEffect, useState} from 'react';

import {postsService} from "../../services/posts.service";
import Post from "./Post";


function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll().then(res => setPosts(res));
    }, [])

    return (
        <div>
            {
                posts.map(el => <Post key={el.id} post={el}/>)
            }
        </div>
    );
}

export default Posts;
