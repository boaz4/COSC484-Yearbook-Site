import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <>
      <Navbar/>
      <Sidebar item = "Chatroom"/>
       <Sidebar item = "Direct messages"  />
    </>
  );
}

export default App;
