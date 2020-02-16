import React from 'react';
import s from'./../../cssFiles/Mypost.module.css';
import MyPostContainer from "./posts/MyPostContainer";

const Profile =(props)=>{
return(
<div className={s.Con}>
				<img src='images/goodMorning.jpg' alt="myfamily"  />
			<MyPostContainer />
			
</div>
);}
export default Profile;