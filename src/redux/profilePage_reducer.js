const CHANGE_POST = "CHANGE_POST";
const ADD_POST = "ADD_POST";

let initialState = {
    onPostChange: '',
    postsProfile: [
        {id: 1, name: "Khamrokhon"},
        {id: 2, name: "Asrolkhoja"},
        {id: 3, name: "Shamsiddin"},
        {id: 4, name: "Mukhiddin"}
    ]
}

let profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let items = {
                id: 5,
                name: state.onPostChange,
            }
            state.postsProfile.push(items);
            state.onPostChange = '';
            return state;
        case CHANGE_POST: {
            state.onPostChange = action.cValue;
            return state;
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
        ({type: CHANGE_POST, cValue: newText})
    )
};

export default profilePageReducer;
