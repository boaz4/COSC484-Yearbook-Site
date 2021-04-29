import React from 'react'
import "./index.css"
import SignInput from "../../components/inputs"
import SignPassoword from "../../components/password"

const CreateAccount = ()=>{
    return(
        <>
   <div class = 'container'>

            <div class='wholePage'>

              <form id='inputForm' method='GET' action="createPage.js" >

                <div class='inputForm'>
                  <h1 id='welcome'>Hello, Please Sign Up!</h1>
                  <SignInput  text = "Create Username:"/>

                  <SignPassoword  text = "Create Password: "/>
                  <SignPassoword  text = "Verify Password: "/>
                </div>
        
                <div class='buttonContainer'>
                  <button id='submitButton' type="submit" form="inputForm" value="Submit">Submit</button>
                </div>

              </form>

          </div>
      </div>
      </>
    )
}

export default CreateAccount;