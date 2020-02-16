import React from 'react';
import s from './../../../cssFiles/Mypost.module.css';
import Post1 from './Post1';

const Mypost = (props) => {

    let newCount =
        props.postsProfile.map(love => <Post1 id={love.id} key={love.id} name={love.name}/>);

    return (
        <div>
            <div className={s.ConM}>
                <h3>My Posts</h3>
                <textarea
                    placeholder="users"
                    onChange={props.update}
                    value={props.onPostChange}>
                </textarea>
            </div>
            <div className={s.ConM}>
                <button onClick={props.add}>Add posts</button>
            </div>
            <div>
                {newCount}
            </div>
        </div>
    );
};
export default Mypost;