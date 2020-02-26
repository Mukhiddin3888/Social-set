import {combineReducers, createStore} from "redux";
import profilePageReducer from './profilePage_reducer';
import dialogsPageReducer from './dialogsPage_reducer';
import usersPageReducer from "./usersPageReducer";

let reducers = combineReducers(
    {
        profilePage: profilePageReducer,
        dialogsPage: dialogsPageReducer,
        usersPage: usersPageReducer
    }
);

let store = createStore(reducers);
window.store=store;
export default store;