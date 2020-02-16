import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profilePage_reducer";
import {connect} from "react-redux";
import Mypost from "./Mypost";

const mapStateToStore=(state)=>{
    return {
        onPostChange: state.profilePage.onPostChange,
        postsProfile: state.profilePage.postsProfile
    }
};
const mapDispatchToStore=(dispatch)=>{
    return{
        update:(newText)=>{
            let text = newText.target.value;
            dispatch(updatePostActionCreator(text));
        },
        add:()=> {
            dispatch(addPostActionCreator());
        }
    }
};

const myPostContainer= connect(mapStateToStore,mapDispatchToStore)(Mypost);

export default myPostContainer;