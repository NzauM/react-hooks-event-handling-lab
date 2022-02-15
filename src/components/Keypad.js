import React from "react";


function Keypad(){
    function listenPassword(){
        console.log('Entering password...')
    }
    return(
        <div>
           <input type="password" onChange={listenPassword}></input>
        </div>
    )
}

export default Keypad
