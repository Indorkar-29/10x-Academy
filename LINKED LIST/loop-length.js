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

// JS program to detect loop in the linked list 

// Node class 
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  class LinkedList {
    constructor() {
      this.head = null;
    }
    detectLoop() {
      let sl = this.head;
      let fast = this.head;
      while (fast !== null && fast.next !== null) {
        sl = sl.next;
        fast = fast.next.next;
  
        if(sl == fast){
          let count = 1
          let temp = sl
          while(sl.next !== temp){
            count++
            sl = sl.next
          }
          return count
  
        }
      }
      return 0
    }
  }
  let n = parseInt(readLine());
  let arr = readLine().split(" ");
  let llist = new LinkedList();
  if (n < 1) {
    llist.head = null;
  } else if (n < 2) {
    llist.head = new Node(arr[0]);
  } else {
    llist.head = new Node(arr[0]);
    let second = new Node(arr[1]);
    llist.head.next = second;
    var curr = llist.head.next;
  }
  for (let i = 2; i < n; i++) {
    let newNode = new Node(arr[i]);
    curr.next = newNode;
    curr = curr.next;
  }
  let link = parseInt(readLine());
  if (link != -1) {
    let t = llist.head;
    for (let i = 0; i < link - 1; i++) {
      t = t.next;
    }
    curr.next = t;
  }
  console.log(llist.detectLoop());