import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Chat from "./components/chats";
import Message from "./components/SendMessage"


function App() {

  var rooms = ["Towson Main", "Towson STEM", "GTJHS Main", "Towson Basketball"]
  var messenger = ["Tom Smith", "Coach Andrews", "Alexis Matthews", "James Peters", "sam Hunter"]
  return (
    <>
    <div className="view">

  
      <Navbar/>
      <div className = "row">

       <div>
        <Sidebar items = {rooms} title = "Chatroom"/>
        <hr/>
         <Sidebar   items = {messenger} title = "Direct messages"  />
       </div>
      
      
       <div className = "col">

         <div className = "chats">
         <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
         <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        </div>

        <div className = "message">
        <Message/>
        </div>


       </div>
        </div>


        </div>
    
    </>
  );
}

export default App;
