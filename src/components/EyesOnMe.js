import React from "react";

function EyesonMe(){
    function focusOnMe(){
        console.log("Good!")
    }
    function blurMe(){
        console.log("Hey! Eyes on me!")
    }
    return(
        <div>
            <button onFocus={focusOnMe} onBlur={blurMe}>Eyes on me</button>
        </div>
    )
}

export default EyesonMe
