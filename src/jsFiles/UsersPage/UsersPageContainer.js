/**
 * Created by muhid on 2/16/2020.
 */
import {connect} from "react-redux";
import usersPage from './UsersPage';
import {followActionCreator,unfollowActionCreator} from './../../redux/usersPageReducer'

let mapStateToProps=(state)=>{
    return{
        users:state.usersPage.users
    }
};
let mapDispatchToPrps=(dispatch)=>{
    return{
         follow:(userId)=>{ dispatch(followActionCreator(userId))},
        unfollow:(userId)=>{dispatch(unfollowActionCreator(userId))}
    }
};
const UsersPageContainer =connect(mapStateToProps,mapDispatchToPrps)(usersPage);
export default UsersPageContainer;
