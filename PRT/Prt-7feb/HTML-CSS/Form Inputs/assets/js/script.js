// `use strict`
// const currDate=new Date();
// document.getElementById("time").textContent=currDate;

function refreshTime(){
    const time=document.getElementById("time");
    const dateStr=new Date().toLocaleString();
    const formatStr=dateStr.replace(", ", " - ");
    time.textContent=formatStr.split("-")[1];

    const curr=new Date();
    // console.log(curr);
    const date=document.getElementById("date");
    date.textContent=formatStr.split("-")[0];
}
setInterval(refreshTime,1000);