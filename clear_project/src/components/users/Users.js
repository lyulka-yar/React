import React, {useEffect, useState} from 'react';

import {userService} from "../../services/users.sevice";
import User from "./User";
import css from "./users.module.css";

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(res => setUsers(res))
    }, [])

    return (
        <div className={css.wrap}>
            {
                users.map(el =>
                    <User
                        key={el.id}
                        user={el}
                    />)
            }
        </div>
    );
}

export default Users;

