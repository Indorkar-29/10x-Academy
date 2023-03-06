let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// -------- Do NOT edit anything above this line ----------

function getElementAt(qIndex, listHead) {
    let temp = listHead;
    if (listHead == null || qIndex <= 0) {
        return -1;
    }
    for (let i = 0; i < qIndex - 1; i++) {
        temp = temp.next;
        if (temp == null) {
            return -1;
        }
    }
    return temp.data;
    // let current = listHead;
    // let count = 1;
    // while (current != null) {
    //     if (count == qIndex) {
    //         return current.data;
    //     }
    //     count++;
    //     current = current.next;
    // }
    // return -1;
}

// -------- Do NOT edit anything below this line ----------
let numTests = parseInt(readLine());
for (let i = 0; i < numTests; ++i) {
    let listElements = readLine().split(" ");
    let index = parseInt(readLine());
    let head = null;
    if (listElements.length > 0) {
        head = new Node(parseInt(listElements[0]));
        let currNode = head;
        for (let j = 1; j < listElements.length; ++j) {
            currNode.next = new Node(parseInt(listElements[j]));
            currNode = currNode.next;
        }
    }
    console.log(getElementAt(index, head));
}


// let testCases = parseInt(readLine());
// while (testCases--) {
//     let arr = readLine().split(" ").map(Number);
//     let query = parseInt(readLine());
//     let count = -1;
//     for (let i = 1; i <= arr.length; i++) {
//         if (i === query) {
//             count = arr[i - 1];
//         }
//     }
//     console.log(count);
// }