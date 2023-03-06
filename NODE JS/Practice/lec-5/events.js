const events=require('events');

// CREATING INSTANCE OF EVENT

const event=new events.EventEmitter();    

// REGISTER EVENT / ATTACH EVENT

// event.addListener('sayHello',()=>{                      
//     console.log("Hello everyone");
// });

// function logData1(){
//     console.log('Hello everyone1');
// }
// function logData2(){
//     console.log('Hello everyone2');
// }
// function logData3(){
//     console.log('Hello everyone3');
// }
// function logData4(){
//     console.log('Hello everyone4');
// }
// event.on('sayHello',logData1);
// event.on('sayHello',logData2);
// event.on('sayHello',logData3);
// event.on('sayHello',logData4);

// event.once('sayHello',()=>{
//     console.log("Hello everyone");
// });

// event.on('sayHello',(name)=>{
//     console.log("Hello",name);
// });

function logData(name,message){
    console.log("Hello",name," ",message);
}
event.on('sayHello',logData);

// FIREING EVENT / CALLING EVENT 

// event.emit('sayHello'); 
// event.emit('sayHello');                    
// event.emit('sayHello',"Tushar");   
event.emit('sayHello',"Tushar","How are You?"); 
event.off('sayHello',logData)
event.emit('sayHello',"Tushar","How are You?"); 