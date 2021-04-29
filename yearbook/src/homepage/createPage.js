import './createPage.css';
import React from 'react';
import ReactDOM from 'react-dom';

class CreatePage extends React.Component{

  formValidation(){
    var password = document.forms["myForm"]["password"].value;
    var vPassword = document.forms["myForm"]["vPassword"].value;
    if (password != vPassword){
        alert("Ensure Passwords Match. Please Try Again.");
        return false;
    }
    else {
        return true;
    }   
  } 

  render(){
    return(
      <div class = 'container'>

            <div class='wholePage'>

              <form name="myForm" id='inputForm' method='GET' action="login.js" onsubmit='return formValidation()' >

                <div class='inputForm'>
                  <h1 id='welcome'>Please Create Account</h1>
                  <p>Create Username:</p>
                  <input type='text' name='username'/>
                  <p>Create Password:</p>
                  <input type='Password' name='password' for='password'/>
                  <p>Verify Password:</p>
                  <input type='Password' name='vPassword' for='vPassword'/>
                </div>
        
                <div class='buttonContainer'>
                  <button id='submitButton' type="submit" form="inputForm" value="Submit">Submit</button>
                </div>

              </form>
          </div>
      </div>
  );

  }
}
export default CreatePage;

/*function CreatePage(){ 

  return(
      <div class = 'container'>

            <div class='wholePage'>

              <form id='inputForm' method='GET' action="login.js" >

                <div class='inputForm'>
                  <h1 id='welcome'>Please Create Account</h1>
                  <p>Create Username:</p>
                  <input type='text' name='username'/>
                  <p>Create Password:</p>
                  <input type='Password' name='password'/>
                  <p>Verify Password:</p>
                  <input type='Password' name='vPassword'/>
                </div>
        
                <div class='buttonContainer'>
                  <button id='submitButton' type="submit" form="inputForm" value="Submit">Submit</button>
                </div>

              </form>
          </div>
      </div>
  );
}

export default CreatePage;*/