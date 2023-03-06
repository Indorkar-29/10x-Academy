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

    insertLevelOrder(arr, i, n) {
      if (i >= n || arr[i]===null || arr[i]===NaN) {
        return null;
      }
      let tree = new Node(arr[i]);
      tree.left = this.insertLevelOrder(arr, 2 * i + 1, n);
      tree.right = this.insertLevelOrder(arr, 2 * i + 2, n);
      return tree;
    }
  }


  function getrightView(root,map,index){
    if(!root){
        return ;
    }
    if(map[index]===undefined){
        map[index]=root.data;
    }
    getrightView(root.right,map,index+1);
    getrightView(root.left,map,index+1);
  }


  function printRightView(root){
    // write code here
	let map=new Map();
	getrightView(root,map,0);
	let i=0;
	let res=[];
	while(map[i]!==undefined){
		res.push(map[i]);
		i++;
	}
	console.log(...res);
  }


  
  function convertToNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== "N" && arr[i]!=='None') {
        arr[i] = parseInt(arr[i]);
      } else {
        arr[i] = null;
      }
    }
  }
  
  let T=parseInt(readLine())
  while(T--){
    let N=parseInt(readLine());
    let arr=readLine().split(" ");
    convertToNumber(arr);
    let tree = new BinaryTree();
    tree.root=tree.insertLevelOrder(arr,0,N);
  
    printRightView(tree.root);
   
}