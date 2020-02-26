import React from 'react';
import s from './../cssFiles/Side.module.css';
import {NavLink} from "react-router-dom";

const Side = (props) => {


    return (
        <div className={s.Side}>
            <div className={s.Side}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </div>
            </div >
            <div className={s.Side}>
                <h2>Siblings</h2>
            </div>

        </div>
    )
}

export default Side;