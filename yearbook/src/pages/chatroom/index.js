
import React, {useState} from 'react';
import "./index.css";
import Navbar from "../../components/Navbar";
// import Navbar  from "../components/Navbar";
import Sidebar from '../../components/Sidebar';
import Chat from "../../components/chats";
import Message from "../../components/SendMessage"

var rooms = ["Towson Main", "Towson STEM", "GTJHS Main", "Towson Basketball"]
var messenger = ["Tom Smith", "Coach Andrews", "Alexis Matthews", "James Peters", "sam Hunter"]


function Chatroom () {
  const [info, setInfo] = useState([
    {
      senderId: "perborgen",
      pics: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      text: "who'll win?"
    },
    {
      senderId: "janedoe",
      pics: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      text: "who'll win?"
    }
  ]);

   return (
      <>
          <div className="view">
            <Navbar/>
            <div className = "row">
              <div>
                <Sidebar items = {rooms} title = "Chatroom"/>
                <hr/>
                <Sidebar items = {messenger} title = "Direct messages"/>
              </div>
              <div className = "col">
                <div className = "chats">
                {info.map(item =>{
                  return(
                  <Chat info = {item} />
                  )
                })} 
                </div>

              <div className = "message">
                <Message/>
              </div>
            </div>
            </div>
          </div>
      </>
    )  
}

export default Chatroom;