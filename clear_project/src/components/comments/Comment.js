import React from 'react';

function Comment ({comment:{postId, id, name, email, body}}) {

  return (
   <div>
    <p>postId: {postId}</p>
    <p>id: {id}</p>
    <p>name: {name}</p>
    <p>email: {email}</p>
    <p>body: {body}</p>
   </div>
  );
}

export default Comment;