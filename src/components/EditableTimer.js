import React, { useState } from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";
function EditableTimer(props){

    const [editFormOpen,setedit]=useState(false);
 
  function handleClose(){
      closeForm();
  }

        
       function handleSubmit(timer) {
        props.onFormSubmit(timer);
        closeForm();
        }

       function closeForm() {
        setedit(false );
        }
return(
    editFormOpen?
    <TimerForm
    id={props.id}
title={props.title}
project={props.project}
onFormSubmit={handleSubmit}
onFormClose={handleClose}
/>:
<Timer
id={props.id}
title={props.title}
project={props.project}
OnEditClick={()=>{setedit(true)}}
onTrashClick={props.onTrashClick}
/>
)
}

export default EditableTimer;