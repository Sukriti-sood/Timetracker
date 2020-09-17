import React from "react";
import TimeDashBoard from "./TimeDahBoard";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
    return(
        <>
        <div className="text-center">
        <h1 >Timers</h1>
        <hr></hr>
        </div>
        
        <TimeDashBoard/>
        </>
    );
}

export default App;