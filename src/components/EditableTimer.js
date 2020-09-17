import React from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";
function EditableTimer(props){
return(
    props.editformOpen?
    <TimerForm
title={props.title}
project={props.project}
/>:
<Timer
title={props.title}
project={props.project}
elapsed={props.elapsed}
runningSince={props.runningSince}
/>
)
}

export default EditableTimer;