import React, { useState } from 'react'
import "./index.css"



const Sidebar = (props) =>{
    const rooms = props.items;
    console.log(rooms);
    return(
       <>
       <div className = "side">
            <h4>{props.title}</h4>

            {rooms.map((room) => <button className ="side-button">{room}</button> )}

       </div>
       </>
    )
}

export default Sidebar;