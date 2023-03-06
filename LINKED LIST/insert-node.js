let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format 


class Node{ 
    constructor(value){ 
        this.data = value; 
        this.next = null;
    }
}
class LinkedList{
  
    constructor(){ 
        this.head = null;
    }
  
    push(newValue){ 
        let newNode = new Node(newValue);
        if (this.head == null){
            this.head = newNode;
            this.tail = newNode;
            return
        }
        this.tail.next = newNode;
        this.tail = newNode;
  
    }
    makeListAndPrint(){
        //   WRITE CODE HERE
        let curr=this.head;
        // let next=this.head.next;
        let arr=[];
        while(curr!=null){
            if(curr.next.data==0){
                arr.unshift(curr.data);
                curr=curr.next;
            }else if(curr.next.data==1){
                arr.push(curr.data);
                curr=curr.next;
            }
            curr=curr.next;
        }
        return console.log(...arr);
    }
}

function read_list_input(){
    let values = readLine().split(" ");
    let linkedList = new LinkedList(); 
    for (val of values){
        linkedList.push(val);
    }
    return linkedList;
}
let testCases = parseInt(readLine());
for(let i=0;i<testCases;i++){
    let linkedList = read_list_input();
    linkedList.makeListAndPrint();
}