import React from 'react';
import s from './DialogMembers.module.css';
import {NavLink} from "react-router-dom";

let dialogsData = [
    {id: 1, name: "Khamrokhon"},
    {id: 2, name: "Asrolkhoja"},
    {id: 3, name: "Shamsiddin"},
    {id: 4, name: "Mukhiddin"}
]

let newDialogsData = dialogsData.map(dialog => <DialogMembers name={dialog.name} id={dialog.id}/>);

const DialogMembers = (props) => {
        let path = "/dialogs/" + props.id;
        return (
            <div>

                <div className={s.dial}>

                    <NavLink to={path}>{props.name}</NavLink>

                </div>
                <div>
                    {newDialogsData}
                </div>
            </div>
        );


}

export default DialogMembers;