import React from 'react';
import s from'./../../cssFiles/Mypost.module.css';
import Mypost from './posts/Mypost.js';
import state from "../../redux/state";
const Profile =(props)=>{
return(
<div className={s.Con}>
				<img src='images/download.jfif' alt="myfamily"  />
			<Mypost likeCount={props.likeCount} addPost={props.addPost} />
			
</div>
);}
export default Profile;