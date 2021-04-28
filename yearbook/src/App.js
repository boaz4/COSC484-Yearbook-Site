import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Chat from "./components/chats";
import Message from "./components/SendMessage"


function App() {
  return (
    <>
      <Navbar/>
      <div className = "row">

       <div>
        <Sidebar item = "Chatroom"/>
        <hr/>
         <Sidebar item = "Direct messages"  />
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


      
    
    </>
  );
}

export default App;
