import React from 'react';
import './App.css';
import Header from './jsFiles/Header.js';
import Side from './jsFiles/Side.js';
import Profile from './jsFiles/MyPosts/Profile.js';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./jsFiles/news/News";
import DialogsContainer from "./jsFiles/Messages/DialogsContainer";
import UsersPageContainer from "./jsFiles/UsersPage/UsersPageContainer";

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

                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/users' render={() => <UsersPageContainer/>}/>

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;