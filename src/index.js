import './App';
import React from 'react';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import App from "./App";
let renderInfo=(state)=>{
    ReactDOM.render(<App state={store.getState()} store={store}  />, document.getElementById("root"));

};

renderInfo(store.getState());
store.subscriber(renderInfo);