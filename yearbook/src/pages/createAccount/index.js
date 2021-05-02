import React from 'react'
import "./index.css"
import SignInput from "../../components/inputs"
import SignPassoword from "../../components/password"
import {Link} from 'react-router-dom'
import {useState} from 'react'

function testFunc(){
    console.log('hi');
}

const CreateAccount = ()=>{

    const handleSubmit = (e) => {
        console.log('hi');
        e.preventDefault();
        
        
       
        /* const form = e.target;
        const data = new FormData(form);
        console.log(data.get('password'));
        console.log(form.elements); */
    }

    return(
        <>
            <div className = 'container'>

                <div className='wholePage'>

                    <form id='inputForm' method='GET' action="createPage.js" onSubmit={testFunc} >

                        <div className ='inputForm'>
                        <h1 id='welcome'>Hello, Please Sign Up!</h1>
                        <SignInput  text = "Create Username:"/>
                        <SignPassoword  text = "Create Password: "/>
                        <SignPassoword  text = "Verify Password: "/>
                        </div>
                
                        <div className='buttonContainer'>
                        <Link to='/'id='submitButton' type="submit" form="inputForm" value="Submit" >Submit</Link> 
                        </div>

                    </form>

                </div>
            </div>
      </>
    )
}

export default CreateAccount;