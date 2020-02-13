import React from 'react';
import s from './../../../cssFiles/Post1.module.css';

const Post1 = (props) => {

    return (
        <div className={s.item}>
            <img src='images/images.jfif' alt="asrolxoja"/>
            <br/>
            <span> {props.id} {props.name}</span>
            <div>
                <span></span>
            </div>

        </div>


    );
}
export default Post1;