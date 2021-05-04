import React  from 'react'
import './index.css';
import Navbar  from "../../components/Navbar";
import ProfileHead from "../../components/ProfileHeader"
import Bio from "../../components/bio"
import About from "../../components/about"
import {useHistory} from 'react-router-dom'



function Profile () {
const history = useHistory();
 const loginSubmitForm = (e) => {
    console.log('login');
    e.preventDefault();
    history.push('/Chatroom');
  }

  return (
      <>
    <div className="App">
     
        <div id="header">
        <Navbar/>
        </div>
    
      <body>
      <ProfileHead />

      <div className = "info">
      <Bio/>

      <About />
     
      </div>

      </body>
      <button className = "homebtn" onClick={loginSubmitForm} >Chat</button>

    </div>
    </>
  );
}

export default Profile;