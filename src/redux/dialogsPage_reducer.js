const CHANGE_MESSAGE = 'CHANGE_MESSAGE';
const ADD_MESSAGE = 'ADD_MESSAGE';
let initialState={
    posts: [
        {id: 1, name: "Khamrokhon"},
        {id: 2, name: "Asrolkhoja"},
        {id: 3, name: "Shamsiddin"},
        {id: 4, name: "Mukhiddin"}
    ],
    messagesUser: [
        {id: 1, message: "Hi"},
        {id: 2, message: "What are you doing"},
        {id: 3, message: "yo"},
        {id: 4, message: "yo"}
    ],
    newMessages: '',
};

let dialogsPageReducer=(state=initialState, action)=>{
    switch (action.type) {
        case CHANGE_MESSAGE: {
            return{
                ...state,
                newMessages: action.chValue
            };
        }
        case ADD_MESSAGE: {
            let newMessageBody = {
                id: 5,
                message: state.newMessages
            };
            return{
                ...state,
                messagesUser: [...state.messagesUser,newMessageBody],
                newMessages:'',
            };
        }
        default:return state;
    }

};
export const updateMessageActionCreator = (Text) => {
    return (
        ({type: CHANGE_MESSAGE, chValue: Text})
    )
};
export const addMessageActionCreator = () => {
    return (
        ({type: ADD_MESSAGE})
    )
};
export default dialogsPageReducer;