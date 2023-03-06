let count=setInterval(update);
let no=0;
function update(){
    const num=document.getElementById("num");
        num.innerHTML=++no;
    if(no===1000){
        clearInterval(count);
    }
}
