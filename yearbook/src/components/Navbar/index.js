import React from 'react';
import "./navbar.css";
import { BrowserRouter as Router } from 'react-router-dom'; 
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';


const Navbar= () => {
    return (
        <>
        <Router>
        <Nav>
             <p className = "logo">Yearbook</p>
            <Bars />
            <NavMenu>
                <NavLink to = "/home" activeStyle>
                   <p className = "nav-items"> Home </p>
                </NavLink>
                <NavLink to = "/profile" activeStyle>
                    <p className = "nav-items"> Profile</p>
                </NavLink>
                <NavLink to = "/settings" activeStyle>
                   <p className = "nav-items"> Settings </p>

                </NavLink>
                <NavLink to = "/help" activeStyle>
                  <p className = "nav-items"> Help </p>

                </NavLink>
            </NavMenu>
        </Nav>
        </Router>
        </>
    )
}

export default Navbar;
