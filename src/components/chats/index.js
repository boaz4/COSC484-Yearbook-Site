import React from 'react'
import "./index.css"

function Chat (props) {
    
    const {pics, text} = props.info;
    return (
        <div className = "chat-body">
           
                       
        <div className = "chat-bubbles">
            <img src={pics} alt =""/>
            <p>{text}</p>

        </div>
                              
            
        </div>
    )
}

export default Chat;