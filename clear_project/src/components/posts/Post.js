import React from 'react';

function Post({post: {userId, id, title, body}}) {

    return (
        <div>
            <p>{id}) userId: <span>{userId}</span></p>
            <p>title: <span>{title}</span></p>
            <p>body: <span>{body}</span></p>
        </div>
    );
}

export default Post;