class Node{
    constructor(ele){
        this.data=ele;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    printList(){
        let arr=[];
        let temp=this.head;
        while(temp != null){
            arr.push(temp.data);
            temp=temp.next;
        }
        console.log(...arr);
    }

    insertAtBeginning(ele){
        let node=new Node(ele);
        if(this.head === null){
            this.head=node;
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }

    insertAtEnd(ele){
        let node=new Node(ele);
        if(this.head===null){
            this.head=node;
        }else{
            let temp=this.head;
            while(temp.next != null){
                temp=temp.next;
            }
            temp.next=node;
        }
        this.size++;
    }

    insertAtPos(ele,pos){
        let node=new Node(ele);
        let curr=this.head;
        let prev=null;
        if(pos === 0){
            node.next=this.head;
            this.head=node;
        }else{
            let i=0;
            while(i<pos && curr.next != null){
                i++;
                prev=curr;
                curr=curr.next;
            }
            prev.next=node;
            node.next=curr;
        }
        this.size++;
    }

    removeAtBeginning(){
        let curr=this.head;
        this.head=this.head.next;
        curr.next=null;
        curr=null;
        this.size--;
    }

    removeAtEnd(){
        let curr=this.head;
        let prev=null;
        while(curr.next != null){
            prev=curr;
            curr=curr.next;
        }
        prev.next=null;
        this.size--;
    }

    removeAtPos(pos){
        let curr=this.head;
        let prev=null;
        if(pos === 0){
            this.head=this.head.next;
            curr.next=null;
            curr=null;
        }else{
            let i=0;
            while(i<pos && curr.next != null){
                i++;
                prev=curr;
                curr=curr.next;
            }
            prev.next=curr.next;
            curr.next=null;
        }
        this.size--;
    }
}


// class Node{
//     constructor(ele){
//         this.data=ele;
//         this.next=null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null;
//         this.size=0;
//     }

//     printList(){
//         let arr=[];
//         let temp=this.head;
//         while(temp != null){
//             arr.push(temp.data);
//             temp=temp.next;
//         }
//         console.log(...arr);
//     }

//     insertAtBeginning(ele){
//         let node=new Node(ele);
//         if(this.head === null){
//             this.head=node;
//         }else{
//             node.next=this.head;
//             this.head=node;
//         }
//         this.size++;
//     }

//     insertAtEnd(ele){
//         let node=new Node(ele);
//         if(this.head===null){
//             this.head=node;
//         }else{
//             let temp=this.head;
//             while(temp.next != null){
//                 temp=temp.next;
//             }
//             temp.next=node;
//         }
//         this.size++
//     }

//     insertAtPos(ele,pos){
//         let node=new Node(ele);
//         let curr=this.head;
//         let prev=null;
//         if(pos === 0){
//             node.next=this.head;
//             this.head=node;
//         }else{
//             let i=0;
//             while(i<pos && curr.next != null){
//                 i++;
//                 prev=curr;
//                 curr=curr.next;
//             }
//             prev.next=node;
//             node.next=curr;
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
//         let curr=this.head;
//         let prev=null;
//         while(curr.next != null){
//             prev=curr;
//             curr=curr.next;
//         }
//         prev.next=null;
//         this.size--;
//     }

//     removeAtPos(pos){
//         let curr=this.head;
//         let prev=null;
//         if(pos===0){
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