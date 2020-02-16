import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogsPage_reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
debugger;

const mapStateToProps = (state) => {
    return {
        newMessages: state.dialogsPage.newMessages,
        posts: state.dialogsPage.posts,
        messagesUser: state.dialogsPage.messagesUser
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onMessageUpdate: (e) => {
            let text = e.target.value;
            dispatch(updateMessageActionCreator(text));
        },
        onMessageAdded: () => {
            dispatch(addMessageActionCreator());
        }
    }
};
let dialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default dialogsContainer;