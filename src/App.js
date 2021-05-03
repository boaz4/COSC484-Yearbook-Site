import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header class = "head" className="App-header">
        <div id="header">

          <nav>

            <ul class="active">
              <h1>YEARBOOK</h1>
              <div class="top">
                <li> <a href="#"> Help </a></li>
                <li> <a href="#"> Settings </a></li>
                <li> <a href="#"> Profile </a></li>
                <li> <a href="#"> Home </a></li>
              </div>

            </ul>
          </nav>
        </div>
      </header>

      <body>
      <div class = "profile">
        <img src = "https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg" alt = "pic"/>
        <h1> Peter Odaka </h1>
    </div>
    <div class = "buttons">
            <input type="submit" class="4buttons" value="MESSAGE" />
            <input type="submit" class="4buttons" value="ADD FRIEND" />
            <input type="submit" class="4buttons" value="REPORT USER" />
            <input type="submit" class="4buttons" value="EDIT PROFILE" />
        </div>
    <div class = "sidebar">
        <h3>BIO</h3>
        <p>This is a dummy bio used for testing purposes, you should definitely invest in a new air fryer it will change your life, running on m-power,
            doge coin to the moooooooon
        </p>
        <h3>Fun Fact</h3>
        <p>I am a towson university teaching assistant, I played the guitar for panic at the disco, I've been to 34 water parks in the span of my life,
            I own a ferret and his name is raphael
        </p>
    </div>
    <div class = "midpage">
        <h3>ABOUT</h3>
        <p>TAGLINE: <br></br> Live hard or die trying
        </p>
        <p>GRADUATION YEAR: <br></br> 2021
        </p>
        <p>SCHOOL: <br></br> Towson University
        </p>
        <p>MAJOR/SCHOOL OF GRADUATION: <br></br> Business Administration - School of Business
        </p>
    </div>
      </body>


    </div>
  );
}


export default App;
