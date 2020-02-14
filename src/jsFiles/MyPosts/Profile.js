import React from 'react';
import s from'./../../cssFiles/Mypost.module.css';
import Mypost from './posts/Mypost.js';
const Profile =(props)=>{
return(
<div className={s.Con}>
				<img src='images/goodMorning.jpg' alt="myfamily"  />
			<Mypost
				store={props.store}
				changes={props.changes}
				postsProfile={props.postsProfile}  />
			
</div>
);}
export default Profile;