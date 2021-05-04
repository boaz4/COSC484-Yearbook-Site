import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import Login from './pages/login/index.js'
import CreateAccount from './pages/createAccount/index.js'
import Chatroom from './pages/chatroom/index'
import Profile from "./pages/profile"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



function App() {
  return (

    <Router>
      <div className = 'Login'>
        <div className = 'createAccount'>
            <Switch>
              <Route exact path='/'>
                <Login/>
              </Route>
              <Route exact path='/CreateAccount'>
                <CreateAccount/>
              </Route>
              <Route exact path='/Chatroom'>
                <Chatroom/>
              </Route>
              <Route exact path='/Profile'>
                <Profile/>
              </Route>
            </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
