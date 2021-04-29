import React from 'react';
import './login.css';
import ReactDOM from 'react-dom';

class LoginForm extends React.Component{


  /*onSubmitHandler = (e) => {
    e.preventDefault();
   this.props.history.push('/createPage')
  }*/


  render(){
    return (

      <div class = 'container'>

            <div class='wholePage'>

              <form id='inputForm' method='GET' action="createPage.js" >

                <div class='inputForm'>
                  <h1 id='welcome'>Welcome</h1>
                  <p>Username:</p>
                  <input type='text' name='username'/>
                  <p>Password:</p>
                  <input type='Password' name='password'/>
                </div>
        
                <div class='buttonContainer'>
                  <button id='submitButton' type="submit" form="inputForm" value="Submit">Submit</button>
                  <button id='createButton' type="submit" form="inputForm" value="Submit" /*onClick={this.onSubmitHandler}*/ >Create Account</button>
                </div>

              </form>
          </div>
      </div>

    );

  }

}
export default LoginForm;



/* Toni Works
function LoginPage(){ 

  return(
      <div class = 'container'>

            <div class='wholePage'>

              <form id='inputForm' method='GET' action="createPage.js" >

                <div class='inputForm'>
                  <h1 id='welcome'>Welcome</h1>
                  <p>Username:</p>
                  <input type='text' name='username'/>
                  <p>Password:</p>
                  <input type='Password' name='password'/>
                </div>
        
                <div class='buttonContainer'>
                  <button id='submitButton' type="submit" form="inputForm" value="Submit">Submit</button>
                  <button id='createButton' type="submit" form="inputForm" value="Submit">Create Account</button>
                </div>

              </form>
          </div>
      </div>
  );
} End of Toni Working

export default LoginPage;*/



/*
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form id='myForm'>
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Username:</p>
      <input type='text' name='username' onChange={this.myChangeHandler} />
      <p>Password:</p>
      <input type='Password' name='password' onChange={this.myChangeHandler} />

      
      </form>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));
*/