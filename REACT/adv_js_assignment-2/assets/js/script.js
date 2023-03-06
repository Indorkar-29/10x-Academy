//Global Variables
const time_ele = document.querySelector(".watch .time");
const start_btn = document.getElementById("start");
const pause_btn = document.getElementById("pause");
const stop_btn = document.getElementById("stop");

let seconds = 0;
let interval = null;

let flag = 0;
let count = 0;

//Event Listeners
start_btn.addEventListener("click", start);
pause_btn.addEventListener("click", pause);
stop_btn.addEventListener("click", stop);

//Update the timer
function timer() {
    seconds++;

    //Format our Time
    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hours * 3600)) / 60);
    let secs = seconds % 60;

    if (secs < 10) secs = "0" + secs;
    if (mins < 10) mins = "0" + mins;
    if (hours < 10) hours = "0" + hours;

    time_ele.innerText = `${hours}:${mins}:${secs}`;
}

function start() {
    pause_btn.disabled = false;
    stop_btn.disabled = false;
    if (flag === 0) {
        if (interval) {
            return;
        }
        interval = setInterval(timer, 1000);
        start_btn.disabled = true;
    }
}

function pause() {
    flag = 1;
    count++;
    pause_btn.innerText = "Continue";
    clearInterval(interval);
    interval = null;
    if (count % 2 == 0) {
        if (interval) {
            return;
        }
        interval = setInterval(timer, 1000);
        pause_btn.innerText = "Pause";
    }
}

function stop() {
    pause();
    pause_btn.innerText = "Pause";
    seconds = 0;
    time_ele.innerText = "00:00:00";
    pause_btn.disabled = true;
    stop_btn.disabled = true;
    start_btn.disabled = false;
    flag = 0;
}