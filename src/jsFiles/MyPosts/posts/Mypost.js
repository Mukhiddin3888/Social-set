import React from 'react';
import s from './../../../cssFiles/Mypost.module.css';
import Post1 from './Post1';
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profilePage_reducer";

const Mypost = (props) => {
let newTestText = React.createRef();
let a=()=> {
    props.store.dispatch(addPostActionCreator());
};
let update=()=>{
    let newText = newTestText.current.value;
   props.store.dispatch(updatePostActionCreator(newText));
};

    let newCount =
        props.postsProfile.map(love => <Post1 id={love.id} name={love.name}/>);

    return (
        <div>
            <div className={s.ConM}>
                <h3>My Posts</h3>
                <textarea
                    onChange={update}
                    value={props.changes}
                    ref={newTestText}>
                </textarea>
            </div>
            <div className={s.ConM}>
                <button onClick={a}>Add posts</button>
            </div>
            <div>
                {newCount}
            </div>
        </div>
    );
};
export default Mypost;