'use strict';


//VARIABLES
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

//Obtain the total seconds of all videos from the data-set attribute
const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
    })
    .reduce((total, videoSecs) => total + videoSecs);

let secondsLeft = seconds;
//Hours left
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
//Minutes left
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft)






