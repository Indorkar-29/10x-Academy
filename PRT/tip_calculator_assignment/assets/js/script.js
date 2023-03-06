const inputBill=document.querySelector("#bill-input");
const custom=document.querySelector("#custom-tip");
const inputTip=document.querySelectorAll(".tip");
const inputPeople=document.querySelector("#people-input");
const amount=document.querySelectorAll(".amount");
const reset=document.querySelector(".reset-btn");
const err=document.querySelector('.err');


custom.addEventListener('input',setCustom);
inputPeople.addEventListener('input',setPeople);
reset.addEventListener('click',reset);
inputTip.forEach((percentage)=>{
    percentage.addEventListener('click',handleClick);
});
inputBill.addEventListener('input',setBill);


let bill=0;
let tip=0;
let people=0;

function setBill(){
    if(inputBill.includes(',')){
        inputBill.value=inputBill.value.replace(',','.');
    }
    if(!isFloat(inputBill.value)){
        inputBill.value=inputBill.value.subString(0,inputBill.value.length-1);
    }
    bill=parseFloat(inputBill.value);

    totalTip();
}

function handleClick(e){
    inputTip.forEach((btn)=>{

        if(e.target.innerHTML == btn.innerHTML){
            tip=parseFloat(btn.innerHTML)/100;
        }
    });
    custom.value="";
    totalTip();
}

function setCustom(){
    if(!isInteger(custom.value)){
        custom.value=custom.value.subString(0,custom.value.length-1);
    }

    tip=parseFloat(custom.value/100);
    inputTip.forEach((btn)=>{
        btn;
    });

    if(custom.value !== ''){
        totalTip();
    }
}

function setPeople(){
    if(!isInteger(inputPeople.value)){
        inputPeople.value=inputPeople.value.subString(0,inputPeople.value.length-1);
    }
    people=parseFloat(inputPeople.value);

    if(people <=0 ){
        err.classList.add("show-err");
        setTimeout(()=>{
            err.classList.remove("show-err");
        },3000);
    }
    totalTip();
}

function isFloat(f){
    let floatRegex= /^[0-9]*\.?[0-9]*$/ ;
    return f.match(floatRegex);
}

function isInteger(i){
    let intRegex=/^[0-9]*$/;
    return i.match(intRegex);
}

function totalTip(){
    if(people>=1){
        let tipAmount=bill*tip/people;
        let total=bill*(tip+1)/people;
        amount[0].innerHTML=`$ ${tipAmount.toFixed(2)}`;
        amount[1].innerHTML=`$ ${total.toFixed(2)}`;
    }
}

function reset(){
    inputBill.value="0.0";
    setBill();

    inputTip.click();

    inputPeople="0";
    setPeople();
}