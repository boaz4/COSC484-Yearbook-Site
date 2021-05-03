import React from 'react'
import "./index.css"
import SignInput from "../../components/inputs"
// import SignPassword from "../../components/password"
// import {Link} from 'react-router-dom'
// import {useState} from 'react'
import {useHistory} from 'react-router-dom'

const CreateAccount = (props)=>{

    const history = useHistory();

    const handleSubmit = (e) => {
        console.log('hi');
        e.preventDefault();
        var password = document.getElementById('password').value;
        var vPassword = document.getElementById('vPassword').value;
        if(password != vPassword){
            alert('Passwords Dont match please try again');
            console.log('fasle');
            return false;         
        }
        else{
            history.push('/');
            console.log('true');
        }
    }

    return(
        <>
            <div className = 'container'>

                <div className='wholePage'>

                    <form id='inputForm' method='GET' action="createPage.js" >

                        <div className ='inputForm'>
                        <h1 id='welcome'>Hello, Please Sign Up!</h1>
                        <SignInput  text = "Create Username:"/>
                        <p>Create Password</p>
                        <input id='password' type='password' name='password'/>
                        <p>Verify Password</p>
                        <input id='vPassword' type='password' name='vPassword' />
                        </div>
                
                        <div className='buttonContainer'>
                        <button id='submitButton' type="submit" form="inputForm" value="Submit" onClick={handleSubmit}>Submit</button>
                        </div>

                    </form>

                </div>
            </div>
      </>
    )
}

export default CreateAccount;