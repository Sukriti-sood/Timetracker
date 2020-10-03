import React from "react";
import EditableTimer from "./EditableTimer";

function EditableTimerList(props){
    return(
        <div id='timers' className="text-center py-2">
{props.timers.map((timer)=>(
    <EditableTimer
key={timer.id}
id={timer.id}
title={timer.title}
project={timer.project}
onFormSubmit={props.onFormSubmit}
onTrashClick={props.onTrashClick}

/>
))}
</div>
    );
}

export default EditableTimerList;

