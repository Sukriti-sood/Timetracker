import React, { useState } from "react";
import TimerForm from "./TimerForm";

function Toggletimerform(props){
    const [isOpen,setOpen]=useState(false);

   function handleClose(){
    setOpen(false);
    }
    function handleSubmit(timer){
        props.onFormSubmit(timer);
        setOpen(false);
    }
    return(
        isOpen?
        <TimerForm
            onFormSubmit={handleSubmit}
            onFormClose={handleClose}
        />:
        <div >
<button className="mt-3" onClick={()=>{setOpen(true)}}>
<i className="fa fa-plus" aria-hidden="true"></i>
</button>
</div>
    )
}
export default Toggletimerform;