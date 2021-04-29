import './App.css';
import LoginForm from './homepage/login.js';
import './homepage/login.css';
import React from 'react';
import ReactDOM from 'react-dom';


function App() {

  return (

    <LoginForm/>
    
  );
}

export default App;













/*
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  
  render() {
      return (
        <div class = 'container'>

            <div class='wholePage'>

              <form id='inputForm' method='GET' action="createPage.js" >

                <div class='inputForm'>
                  <h1 id='welcome'>Welcome</h1>
                  <p>Username:</p>
                  <input type='text' name='username' onChange={this.myChangeHandler} />
                  <p>Password:</p>
                  <input type='Password' name='password' onChange={this.myChangeHandler} />
                </div>
        
                <div class='buttonContainer'>
                  <button id='submitButton' type="submit" form="inputForm" value="Submit">Submit</button>
                  <button id='createButton' type="submit" form="inputForm" value="Submit">Create Account</button>
                </div>
     
              </form>
          </div>
      </div>
    );
  }
}


ReactDOM.render(<MyForm />, document.getElementById('root'));
export default MyForm;
*/
