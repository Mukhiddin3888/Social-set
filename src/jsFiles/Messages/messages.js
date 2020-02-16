import React from 'react';

const Messages = (props) => {
    return (
        <div>
            <div > {props.message} </div>
            {props.newMessages}
        </div>
    )
};
export default Messages;
