import React from 'react';
import s from './../../../cssFiles/Post1.module.css';

const Post1 = (props) => {

    return (
        <div className={s.item}>
            <img src='images/images.jfif' alt="asrolxoja"/>
            post 1<br/>
            <span> {props.like} {props.num}</span>
            <div>
                <span>like</span>
            </div>

        </div>


    );
}
export default Post1;