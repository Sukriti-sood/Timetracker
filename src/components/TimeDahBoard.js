import React, { useState } from "react";
import EdiableTimerList from "./TimerList";
import ToggleTimerForm from "./Toggletimerform"
import helpers from "./helper";


function TimeDashBoard(){
    const Timers= [
    
        ];

    const [timers,setTimers]=useState(Timers);

    function handleEditFormSubmit(attrs){
        updateTimer(attrs);
        };
        
        function updateTimer(attrs){
            const ntimers=timers.map((timer) => {
                if (timer.id === attrs.id) {
                return Object.assign({}, timer, {
                title: attrs.title,
                project: attrs.project,
                });
                } else {
                return timer;
                }
                });
                setTimers(ntimers);
        }
        function handleTrashCLiick(timerid){
            deleteTimer(timerid);
        }
        function deleteTimer(timerid){
           const ntimers=timers.filter(t=>t.id!=timerid);
            setTimers(ntimers);
        }

  function  handlecreateSubmit(timer){
    const t = helpers.newTimer(timer);
    setTimers(timers.concat(t));
    }

       

    return(
        <div>
            <div className="text-center py-4">
                <EdiableTimerList
                    timers={timers}
                    onFormSubmit={handleEditFormSubmit}
                    onTrashClick={handleTrashCLiick}
                />
                <ToggleTimerForm
                onFormSubmit={handlecreateSubmit} />
            </div>
        </div>
    );
}

export default TimeDashBoard;