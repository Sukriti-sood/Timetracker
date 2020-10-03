import React,{useEffect, useState} from "react";
import helpers from "./helper";
import { Card,   CardTitle,CardSubtitle,CardBody } from 'reactstrap';
import TimerActionButton from "./TimerActionButton";

function Timer(props){
 
        const[elapsed,setelapse]=useState(0);
        const [isActive, setIsActive] = useState(false);
        const elapsedString = helpers.renderElapsedString(elapsed);

        useEffect(() => {
                let interval = null;
                if (isActive) {
                  interval = setInterval(() => {
                    setelapse(elapsed => elapsed + 1000);
                  }, 1000);
                } else if (!isActive ) {
                  clearInterval(interval);
                }
                return () => clearInterval(interval);
              }, [isActive, elapsed]);

       const handleStartClick = () => {
        setIsActive(true);
                };
             const   handleStopClick = () => {
                setIsActive(false);
                };

        return (
        <Card className="col-12 offset-md-4 col-md-4 pt-4 px-0 mt-4 border border-success">
        <CardBody>
        <CardTitle>
        <h4>{props.title}</h4>
        </CardTitle>
        <CardSubtitle>
        <p>{props.project}</p>
        </CardSubtitle>
<div>
<h2>
{elapsedString}
</h2>

<div className='extra content'>
<span className="float-right" 
onClick={props.OnEditClick}>
<i className="fa fa-edit fa-2x"></i>
</span>
<span className="mr-4 float-right" onClick={()=>{props.onTrashClick(props.id)}}>
<i className="fa fa-trash fa-2x" aria-hidden="true"></i>
</span>
</div>
</div>
</CardBody>

<TimerActionButton
timerIsRunning={isActive}
onStartClick={handleStartClick}
onStopClick={handleStopClick}
/>

</Card>
);
}

export default Timer;