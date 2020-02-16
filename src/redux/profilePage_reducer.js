const CHANGE_POST = "CHANGE_POST";
const ADD_POST = "ADD_POST";

let initialState = {
    onPostChange: 'r',
    postsProfile: [
        {id: 1, name: "Khamrokhon"},
        {id: 2, name: "Asrolkhoja"},
        {id: 3, name: "Shamsiddin"},
        {id: 4, name: "Mukhiddin"}
    ]
}

let profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            return{
                ...state,
                postsProfile : [...state.postsProfile,{ id: 5, name: state.onPostChange,}],
                onPostChange :'',
            };
        }
        case CHANGE_POST: {
            return{
                ...state,
                onPostChange: action.newText,
            };
        }
        default:return state;
    }
};
export const addPostActionCreator = () => {
    return (
        ({type: ADD_POST})
    )
};
export const updatePostActionCreator = (newText) => {
    return (
        ({type: CHANGE_POST, newText: newText})
    )
};

export default profilePageReducer;