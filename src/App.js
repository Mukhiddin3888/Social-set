import React from 'react';
import './App.css';
import Header from './jsFiles/Header.js';
import Side from './jsFiles/Side.js';
import Profile from './jsFiles/MyPosts/Profile.js';
import Dialogs from './jsFiles/Messages/Dialogs.js';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./jsFiles/news/News";
import {changePost, addPost} from "./redux/state";


function App(props) {

    return (
        <BrowserRouter>
            <div className="Mainpage">

                {/*<Profile />*/}
                <Header/>

                <Side/>
                <div className="content">
                    {/* <Route  path='/profile' component={Profile}/>
                     <Route path='/dialogs' component={Dialogs}/>*/}

                    <Route path='/profile' render={() => <Profile
                        addPost={addPost}
                        changePost={changePost}
                        changes={props.state.profile.onPostChange}
                        postsProfile={props.state.profile.postsProfile}
                    />}/>
                    <Route path='/dialogs' render={() => <Dialogs posts={props.state.messages.posts}
                                                                  messagess={props.state.messages.messagess}/>}/>
                    <Route path='/news' render={() => <News/>}/>

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
