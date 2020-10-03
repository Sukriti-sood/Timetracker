import React from "react";
import {Button} from "reactstrap";
export default function  TimeractionButton(props){
    return(
        props.timerIsRunning ?
        (<Button color="danger"size="lg" onClick={props.onStopClick} className="zerorad" >
Stop
</Button>):
<Button color="success"size="lg" onClick={props.onStartClick} className="zerorad" >
Start
</Button>


    )
}