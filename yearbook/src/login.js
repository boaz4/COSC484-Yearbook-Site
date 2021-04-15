import React from 'react';
import ReactDOM from 'react-dom';
import './login.css';

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