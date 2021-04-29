import React from 'react'
import "./index.css"
import SignInput from "../../components/Inputs"

const Login = ()=>{
    return(
        <>
   <div class = 'container'>

            <div class='wholePage'>

              <form id='inputForm' method='GET' action="createPage.js" >

                <div class='inputForm'>
                  <h1 id='welcome'>Welcome</h1>
                  <SignInput  text = "username: "/>

                  <SignInput  text = "password: "/>
                </div>
        
                <div class='buttonContainer'>
                  <button id='submitButton' type="submit" form="inputForm" value="Submit">Submit</button>
                  <button id='createButton' type="submit" form="inputForm" value="Submit" /*onClick={this.onSubmitHandler}*/ >Create Account</button>
                </div>

              </form>

          </div>
      </div>
      </>
    )
}

export default Login;