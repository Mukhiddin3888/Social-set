
import React from 'react';
import ReactDOM from 'react-dom';
import './App';
import Header from './jsFiles/Header.js';
import Side from './jsFiles/Side.js';
import Profile from './jsFiles/MyPosts/Profile.js';
import Dialogs from './jsFiles/Messages/Dialogs.js';
import {BrowserRouter, Route} from "react-router-dom";

import News from "./jsFiles/news/News";
export let renderInfo=(state)=> {
    const Mainpage = (props) => {

        return (
            <BrowserRouter>
                <div className="Mainpage">

                    {/*<Profile />*/}
                    <Header/>

                    <Side/>
                    <div className="content">
                        {/* <Route  path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>*/}

                        <Route path='/profile' render={() => <Profile likeCount={state.profile.likeCount}
                                                                      addPost={state.addPost}/>}/>
                        <Route path='/dialogs' render={() => <Dialogs posts={props.state.messages.posts}
                                                                      messagess={props.state.messages.messagess}/>}/>
                        <Route path='/news' render={() => <News/>}/>

                    </div>
                </div>
            </BrowserRouter>
        )
    };
    ReactDOM.render(<Mainpage state={state}/>, document.getElementById("root"));
}