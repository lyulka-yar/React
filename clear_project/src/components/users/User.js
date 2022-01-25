import React from 'react';

function User({user: {id, name, username, phone, email}}) {

    return (
        <div>
            <p>{id}) <span>{name}</span></p>
            <p><span>{username}</span></p>
            <p><span>{phone}</span></p>
            <p><span>{email}</span></p>
        </div>
    );
}

export default User;