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
    getListLength(head){
        let curr=head;
        let len=0;
        while(curr!=null){
            len++;
            curr=curr.next;
        }
        return len;
    }
    
    reverseLL(head){
        let curr=head;
        let prev=null;
        let next=null;
        while(curr!=null){
            next=curr.next;
            curr.next=prev;

            prev=curr;
            curr=next;
        }

        return prev;
    }

    isPalin(){
        //WRITE CODE HERE
        let temp=this.head;
        if(temp===null || temp.next===null){
            return "True";
        }

        let len=this.getListLength(this.head);
        for(let i=0;i<((len/2)-1);i++){
            temp=temp.next;
        }

        let secondHalf=temp.next;
        let firstHalf=this.head;
        temp.next=null;

        secondHalf=this.reverseLL(secondHalf);
        while(firstHalf!==null && secondHalf!==null){
            if(firstHalf.data !== secondHalf.data){
                return "False";
            }
            secondHalf=secondHalf.next;
            firstHalf=firstHalf.next;
        }
        return "True";
    }
}

function readListInput(){
    let vals = readLine().split(" ");
    linkedList = new LinkedList(); 
    for(let val of vals){
        linkedList.push(val);
    }
    return linkedList;
}
let testCases = parseInt(readLine());
for(let i=0;i<testCases;i++){
    let linkedList = readListInput();
    console.log(linkedList.isPalin());
}