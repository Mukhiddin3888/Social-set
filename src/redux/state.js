import profilePageReducer from './profilePage_reducer';
import dialogsPageReducer from './dialogsPage_reducer';


let store = {
    _state: {
        profile: {
            onPostChange: '',
            postsProfile: [
                {id: 1, name: "Khamrokhon"},
                {id: 2, name: "Asrolkhoja"},
                {id: 3, name: "Shamsiddin"},
                {id: 4, name: "Mukhiddin"}
            ],
        },
        messages: {
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
        },
    },
    getState(){
        return this._state;
    },
    dispatch(action){

        this._state.profile = profilePageReducer(this._state.profile, action);
        this._state.messages=dialogsPageReducer(this._state.messages, action);
        return this.renderInfo(this.getState())
    },

    renderInfo (){
        console.log('state changed');
    },
    subscriber(observer){
        this.renderInfo = observer;
    },
};




export default store;