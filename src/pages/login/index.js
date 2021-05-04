import React from 'react'
import "./index.css"
import SignInput from "../../components/inputs"
import SignPassword from "../../components/password"
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import { useState } from 'react';

const Login = ()=>{
  const [token, setToken] = useState();

  const history = useHistory();

   const createSubmitForm = (e) => {
    console.log('create');
    e.preventDefault();
    history.push('/CreateAccount');
}

  const loginSubmitForm = (e) => {
    /* if(!token) {
      return <Login setToken={setToken} />
    } */
    console.log('login');
    console.log('newlogin');
    e.preventDefault();
    history.push('/Chatroom');
  }

    return(
        <>
   <div className = 'container'>

            <div className='wholePage'>

              <form id='inputForm' method='GET'>

                <div className='inputForm'>
                  <h1 id='welcome'>Welcome!</h1>
                  <SignInput  text = "Enter Username:"/>
                  <SignPassword  text = "Enter Password: "/>
                </div>
        
                <div className='buttonContainer'>
                <button id='submitButton' type="submit" form="inputForm" value="Submit" onClick={loginSubmitForm}>Submit</button>
                <button id='createButton' type="submit" form="inputForm" value="Submit" onClick={createSubmitForm} >Create Account</button>
                </div>

              </form>

          </div>
      </div>
      </>
    )
}

export default Login;