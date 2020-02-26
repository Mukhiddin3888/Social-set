/**
 * Created by muhid on 2/16/2020.
 */
import React from 'react';
import s from './UsersPage.module.css'

const usersPage = (props) => {
    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                    <span className={s.userPhoto}>
                        <div><img alt="userPhoto" src={u.image}/></div>
                    <div>{u.followed
                        ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(u.id)}>Follow</button>
                    }
                        </div>
                    </span>
                        <span>
                    <div >{u.fullname}</div>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                        </span>

                    </div>
                )}

        </div>
    )
};
export default usersPage;