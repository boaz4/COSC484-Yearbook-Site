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
         <Sidebar item = "Direct messages"  />
       </div>
       <div className = "col">
         <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        <Chat/>
        
        <Message/>
       </div>
        </div>


      
    
    </>
  );
}

export default App;
