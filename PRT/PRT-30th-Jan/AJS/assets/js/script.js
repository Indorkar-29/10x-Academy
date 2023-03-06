function clearScreen(){
    document.getElementById("input").value="";
}

function display(value){
    document.getElementById("input").value+=value;
}

function calculate(){
    let task=document.getElementById("input").value;
    let result=eval(task);
    document.getElementById("input").value=result;
}