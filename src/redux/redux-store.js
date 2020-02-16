import {combineReducers, createStore} from "redux";
import profilePageReducer from './profilePage_reducer';
import dialogsPageReducer from './dialogsPage_reducer';

let reducers = combineReducers(
    {
        profilePage: profilePageReducer,
        dialogsPage: dialogsPageReducer
    }
);

let store = createStore(reducers);
window.store=store;
export default store;