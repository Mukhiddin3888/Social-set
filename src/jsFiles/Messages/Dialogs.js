import React from 'react';
import s from './Dialogs.module.css';
import DialogMembers from "./DialogMembers";
import Messages from "./messages";

const Dialogs = (props) => {
    let newMessages = props.messagesUser.map(m => <Messages message={m.message} key={m.id} />)

    let newDialogsData =
        props.posts.map(dialog => <DialogMembers  newMessages={props.newMessages} name={dialog.name} key={dialog.id} id={dialog.id}/>);
    return (
        <div className={s.dialogs }>
            <div className={s.dialogItems }>
                {newDialogsData}
            </div>
            <div className={s.messages}>
                {newMessages}

                <div>
                    <textarea
                    onChange={props.onMessageUpdate}
                    placeholder="write Message"
                    value={props.newMessages}>

                    </textarea>
                </div>
                <div>
                    <button onClick={props.onMessageAdded}>
                        Add Message
                    </button>
                </div>

            </div>

        </div>

    );
}
export default Dialogs;