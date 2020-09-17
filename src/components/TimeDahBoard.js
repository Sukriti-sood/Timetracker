import React from "react";
import EdiableTimerList from "./TimerList";
import ToggleTimerForm from "./Toggletimerform"

function TimeDashBoard(){
    return(
        <div>
            <div className="text-center py-4">
                <EdiableTimerList/>
                <ToggleTimerForm isOpen={true}/>
            </div>
        </div>
    );
}

export default TimeDashBoard;