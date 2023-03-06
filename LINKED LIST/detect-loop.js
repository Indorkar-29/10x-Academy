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
    push(new_value){ 
        let new_node = new Node(new_value)
        if(this.head === null){
            this.head = new_node;
            this.tail = new_node;
            return
        }
        this.tail.next = new_node;
        this.tail = new_node; 
    }   
    deleteDuplicates(){             // 1 -> 1 -> 2 -> 2 -> 5 -> 1 
        let isPresent=new Set();
        let curr=this.head;
        let prev=null;
        if(curr===null){
            return curr;
        }
        prev=curr;
        isPresent.add(prev.data);

        curr=curr.next;
        while(curr !== null){
            if(isPresent.has(curr.data)===true){
                prev.next=curr.next;
                curr=curr.next;
            }else{
                isPresent.add(curr.data);

                prev=curr;
                curr=curr.next;
            }
        }
        return this.head;
	}
}

function readListInput(){
    let vals = readLine().split(" ");
    let linkedList = new LinkedList(); 
    for(let val of vals){
        linkedList.push(val);
    }
    return linkedList;
}

function printLL(head){
	let temp = head;
	let res = "";
	while(temp !== null){
		res += temp.data + " ";
		temp = temp.next;
	}
	console.log(res);
}

let n = parseInt(readLine());
let linkedList = readListInput();
printLL(linkedList.deleteDuplicates());