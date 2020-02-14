import React from 'react';
import s from './Dialogs.module.css';
import DialogMembers from "./DialogMembers";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/state";

const Messages = (props) => {
    return (
            <div>
                <div className={s.messages}> {props.massage} </div>
            </div>
    )
};

const Dialogs = (props) => {
let onMessageUpdate=(e)=>{
    let text = e.target.value;
    updateMessageActionCreator(text);
};
let onMessageAdded=()=>{
    addMessageActionCreator();
}


    let newMessages =
        props.messagesUser.map(m => <Messages massage={m.message}/>);
    let newDialogsData =
        props.posts.map(dialog => <DialogMembers posts={props.posts} name={dialog.name} id={dialog.id}/>);

    return (
        <div className={s.dialogs }>
            <div className={s.dialogItems }>
                {newDialogsData}
            </div>
            <div className={s.messages}>
                {newMessages}
                <div>
                    <textarea
                    onChange={onMessageUpdate}

                    value={props.store.getState().messages.newMessages}>

                    </textarea>
                </div>
                <div>
                    <button onClick={onMessageAdded}>
                        Add Message
                    </button>
                </div>

            </div>

        </div>

    );
}
export default Dialogs;