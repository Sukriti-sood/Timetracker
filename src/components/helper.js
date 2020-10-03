import { v4 as uuidv4 } from 'uuid'; 
 
function newTimer(attrs = {}) {
    return {
        title: attrs.title || 'Timer',
        project: attrs.project || 'Project',
        id: uuidv4(), 
        elapsed: 0
    };
}
 

 
function renderElapsedString(elapsed) {
    let totalElapsed = elapsed;
    
    return millisecondsToHuman(totalElapsed);
}
 
function millisecondsToHuman(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);
 
    return [
        pad(hours.toString(), 2),
        pad(minutes.toString(), 2),
        pad(seconds.toString(), 2)
    ].join(':');
 
}
 
function pad(numberString, size) {
    let padded = numberString;
    while (padded.length < size) padded = '0' + padded;
    return padded;
}
 
export default {
    millisecondsToHuman: millisecondsToHuman,
    newTimer: newTimer,
    renderElapsedString: renderElapsedString
};
