import React from 'react'
import "./index.css"
import SignInput from "../../components/inputs"
import SignPassoword from "../../components/password"
import {Link} from 'react-router-dom'

const Login = ()=>{

  const handleSubmit = (e) => {
    console.log('hi');
    e.preventDefult();
    
    /* const form = e.target;
    const data = new FormData(form);
    console.log(data.get('password'));
    console.log(form.elements); */
}

    return(
        <>
   <div className = 'container'>

            <div className='wholePage'>

              <form id='inputForm' method='GET' action="createPage.js" onSubmit={handleSubmit} >

                <div className='inputForm'>
                  <h1 id='welcome'>Welcome!</h1>
                  <SignInput  text = "Enter Username:"/>
                  <SignPassoword  text = "Enter Password: "/>
                </div>
        
                <div className='buttonContainer'>
                 <Link to='/'id='submitButton' type="submit" form="inputForm" value="Submit">Submit</Link> 
                 <Link to='/CreateAccount'id='createButton' type="submit" form="inputForm" value="Submit">CreateAccount</Link> 
                </div>

              </form>

          </div>
      </div>
      </>
    )
}

export default Login;