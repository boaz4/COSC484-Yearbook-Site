import logo from './logo.svg';
import './login.css';
import React from 'react';
import ReactDOM from 'react-dom';


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
     <div class = 'container'>

        <div class='wholePage'>

          <form id='inputForm' method='GET'>

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
