// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0; //optional
//     }
// }

// let l1 = new LinkedList();

// //Insert Elements to the Linked List

// insertAtBeginning() {

// }

// insertAtEnd() {

// }

// insertAtPosition() {

// }

// //Remove Elements from the Linked List

// removeAtBeginning() {

// }

// removeAtEnd() {

// }

// removeAtPosition() {

// }

// printList(){

// }

//Book: Data Structures & Algorithms Made Easy  #Author: Narsimha Karumanchi(Microsoft)

// Singly LL:

// class Node {
//     constructor(element) {
//         this.data = element;
//         this.next = null;
//     }
// }

// // Doubly LL:

// // class Node{
// //     constructor(element) {
// //         this.data=element;
// //         this.next=null;
// //         this.prev=null;
// //     }
// // }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0; //optional //no. of elements present in a linked list
//     }
    // printList(){
    //     //let arr=[];
    //     let temp = this.head;
    //     while (temp != null) {
    //         //arr.push(temp.data);
    //         console.log(temp.data);
    //         temp = temp.next;
    //     }
    //     //console.log(arr);
    // }

//     insertAtBeginning(element) {
//         // TC -> O(1)
//         let node = new Node(element);
//         if (this.head == null) {
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++;
//     }

//     insertAtEnd(element){
//         //TC -> O(n)
//         let node=new Node(element);
//         if(this.head==null){
//             this.head=node;
//         }else{
//             let temp=this.head;
//             while(temp.next != null){
//                 temp=temp.next;
//             }
//             temp.next=node;
//         }
//         this.size++; 
//     }
//     insertAtPos(element,pos){
//         let node =new Node(element);
//         let curr=this.head;
//         let prev=null;
//         if(pos==0){
//             node.next=this.head;
//             this.head=node;
//         }else{
//             let i=0;
//             while(i<pos){
//                 i++;
//                 prev=curr;
//                 curr=curr.next;
//             }
//             node.next=curr;
//             prev.next=node;
//         }
//         this.size++;
//     }
//     removeAtBeginning(){
//         let curr=this.head;
//         this.head=this.head.next;
//         curr.next=null;
//         curr=null;
//         this.size--;
//     }
//     removeAtEnd(){
//         let prev=null;
//         let curr=this.head;
//         while(curr.next != null){
//             prev=curr;
//             curr=curr.next;
//         }
//         prev.next=null;
//         this.size--;
//     }
//     removeAtPos(pos){
//         let prev=null;
//         let curr=this.head;
//         if(pos==0){
//             this.head=this.head.next;
//             curr.next=null;
//             curr=null;
//         }else{
//             let i=0;
//             while(i<pos && curr.next != null){
//                 i++;
//                 prev=curr;
//                 curr=curr.next;
//             }
//             prev.next=curr.next;
//             curr.next=null;
//         }
//         this.size--;
//     }
// }

// let L1 = new LinkedList();

// L1.insertAtBeginning("A");
// L1.insertAtBeginning("B");
// L1.insertAtBeginning("C");

// L1.printList();

// op: 
// C
// B
// A