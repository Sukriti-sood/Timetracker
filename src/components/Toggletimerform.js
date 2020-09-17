import React from "react";
import TimerForm from "./TimerForm";

function Toggletimerform(props){
    return(
        props.isOpen?
        <TimerForm/>:
        <div >
<button>
<i className='plus icon' />
</button>
</div>
    )
}
export default Toggletimerform;