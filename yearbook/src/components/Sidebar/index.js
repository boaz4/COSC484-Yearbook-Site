import React, { useState } from 'react'
import "./index.css"



const Sidebar = ({item, names}) =>{
    const [state, setState] = useState({
    
  });
    return(
       <>
       <div className = "side">
            <h4>{item}</h4>
            <button className ="side-button"> Towson main</button>

       </div>
       </>
    )
}

export default Sidebar;