import React from "react";
import EditableTimer from "./EditableTimer";

function EditableTimerList(){
    return(
        <div id='timers' className="text-center py-2">
<EditableTimer
title='Learn React'
project='Web Domination'
elapsed='8986300'
runningSince={null}
editFormOpen={false}
/>
<EditableTimer
title='Learn extreme ironing'
project='World Domination'
elapsed='3890985'
runningSince={null}
editFormOpen={true}
/>
</div>
    );
}

export default EditableTimerList;