import React from 'react';
import s from './DialogMembers.module.css';
import {NavLink} from "react-router-dom";



const DialogMembers = (props) => {

    let path = "/dialogs/" + props.id;
        return (
            <div>

                <div className={s.dial}>

                    <NavLink to={path}>{props.name}</NavLink>

                </div>
            </div>
        );


};

export default DialogMembers;