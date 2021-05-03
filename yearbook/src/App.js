import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Login from './pages/login/index.js'
import CreateAccount from './pages/createAccount/index.js'
import Chatroom from './pages/chatroom/index'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className = 'Login'>
       {/* <Login/> */}
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
        </Switch>
       </div>
    </div>
    </Router>
    
  );
}

export default App;
