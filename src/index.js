import './App';
import React from 'react';
import state, {subscriber} from './redux/state';
import ReactDOM from 'react-dom';
import App from "./App";
let renderInfo=(state)=>{
    ReactDOM.render(<App state={state}/>, document.getElementById("root"));

};

renderInfo(state);
subscriber(renderInfo);