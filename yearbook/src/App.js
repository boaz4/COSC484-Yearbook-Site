import './App.css';

import LoginForm from './pages/login/login';
import './homepage/login.css';
import Chatroom from './pages/chatroom/chatroom'

function App() {
  return (
    <div>
      <LoginForm />
      <Chatroom />
    </div>
  );
}

export default App;