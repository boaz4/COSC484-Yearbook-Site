import React from 'react'
import "./index.css"


function ProfileHead (){
    return(
        <>
    <div className = "user">
        <div>
         <img className = "profilePic" src = "https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg" alt = "pic"/>
        </div>

        <div className = "user-2">
        <h1 classname = "Username"> Peter Odaka </h1>
            <input type="submit" className="buttons" value="MESSAGE" />
            <input type="submit" className="buttons" value="ADD FRIEND" />
            <input type="submit" className="buttons" value="REPORT USER" />
            <input type="submit" className="buttons" value="EDIT PROFILE" />
        </div>
    </div>
    </>

    )
}

export default ProfileHead;