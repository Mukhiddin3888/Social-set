import './App';
import React from 'react';
import store from './redux/state';
import ReactDOM from 'react-dom';
import App from "./App";
let renderInfo=(state)=>{
    ReactDOM.render(<App state={store.getState()} store={store} dispatch={store.dispatch.bind(store)} />, document.getElementById("root"));

};

renderInfo(store.getState());
store.subscriber(renderInfo);