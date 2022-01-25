import React, {useEffect, useState} from 'react';

import {commentsService} from "../../services/comments.service";
import Comment from "./Comment";
import css from "./comments.module.css";

function Comments() {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(res => setComments(res))
    }, [])

    return (
        <div
            className={css.wrap}>

            {
                comments.map(el =>
                    <Comment
                        key={el.id}
                        comment={el}
                    />)
            }

        </div>
    );
}

export default Comments;
