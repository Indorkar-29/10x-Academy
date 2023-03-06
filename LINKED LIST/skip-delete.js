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
// JS program to delete M nodes after N nodes
// Node class
class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
  }
  class LinkedList{
    constructor(){
        this.head = null
        this.last_node = null
    }
    append(data){
        if (this.last_node === null){
            this.head =new Node(data)
            this.last_node = this.head
        }
        else{
            this.last_node.next =new Node(data)
            this.last_node = this.last_node.next
        }
        }
    display(){
        var current = this.head
        let res=''
        while(current){
            res=res+current.data+" "
            current = current.next
        }
        console.log(res)
    }
    skipMdeleteN(M, N){
          // Implment This
          let curr = this.head;
          let t;
          while(curr != null){
              for(let i=1; i<M && curr != null; i++){
                  curr = curr.next;
              }
              if(curr == null){
                  return;
              }
              t = curr.next;
              for(let i=1; i<=N && t != null; i++){
                  t = t.next;
              }
              curr.next = t;
              curr = t;
          }
      }
  }
  // Driver program to test above function
  let n = parseInt(readLine());
  let input = readLine().split(" ");
  let M = parseInt(input[0]);
  let N = parseInt(input[1]);
  let llist = new LinkedList();
  let ar=readLine().split(" ");
  l = ar.map(Number);
  // l.reverse();
  for(let i of l){
    llist.append(i);
  }
  llist.skipMdeleteN(M, N) ;
  llist.display();