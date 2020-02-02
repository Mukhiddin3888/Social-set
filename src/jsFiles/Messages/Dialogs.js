import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
const DialogMembers = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>

            <div className={s.dial}>

                <NavLink to={path}>{props.name}</NavLink>

            </div>

        </div>
    );}


const Messages = (props) => {
    return <div className={s.messages}> {props.massage} </div>
}
const Dialogs = (props) => {


    let newMessages =
        props.messagess.map(m => <Messages massage={m.message} />);
    let newDialogsData =
        props.posts.map(dialog => <DialogMembers name={dialog.name} id={dialog.id}/>);

    return (
        <div className={s.dialogs + ' ' + s.active}>
            <div className={s.dialogItems + ' '+s.active}>
                {newDialogsData}
            </div>
            <div className={s.messages}>
                {newMessages}
            </div>
        </div>

    );
}
export default Dialogs;