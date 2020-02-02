import React from 'react';
import s from './../../../cssFiles/Mypost.module.css';
import Post1 from './Post1';

const Mypost = (props) => {
let newTestText = React.createRef();
let a=()=> {
    let text = newTestText.current.value;

    props.addPost(text);
newTestText.current.value='';

}
    let newCount =
        props.likeCount.map(love => <Post1 like={love.like} num={love.num}/>);
    return (
        <div>

            <div className={s.ConM}>

                <h3>My Posts</h3>
                <textarea ref={newTestText}></textarea>
            </div>
            <div className={s.ConM}>
                <button onClick={a}>Add posts</button>
            </div>
            <div>
                {newCount}
            </div>
        </div>

    );
}
export default Mypost;