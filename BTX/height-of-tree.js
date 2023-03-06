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

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
    
    height(root){

       // write code here
       if(root===null){
        return 0;
       }
       let lh=this.height(root.left);
       let rh=this.height(root.right);

       return Math.max(lh,rh)+1;
    }

    insertLevelOrder(arr, i, n) {
      if (i >= n) {
        return null;
      }
      let tree = new Node(arr[i]);
      tree.left = this.insertLevelOrder(arr, 2 * i + 1, n);
      tree.right = this.insertLevelOrder(arr, 2 * i + 2, n);
      return tree;
    }
  }
  
  function convertToNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== "N") {
        arr[i] = parseInt(arr[i]);
      } else {
        arr[i] = null;
      }
    }
  }
  
  let arr = readLine().split(" ");
  convertToNumber(arr);
  let tree = new BinaryTree();
  tree.root=tree.insertLevelOrder(arr,0,arr.length)
  console.log(tree.height(tree.root))