import {combineReducers, createStore} from "redux";
import profilePageReducer from './profilePage_reducer';
import dialogsPageReducer from './dialogsPage_reducer';

let reducers = combineReducers(
    {
        profilePageReducer: profilePageReducer,
        dialogsPageReducer: dialogsPageReducer
    }
);


let store = createStore(reducers);

export default store;