let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


class Student {
    constructor(name) {
        this.studentName = name;
    }
    enter_score(marks) {
        this.marks = marks;
    }
    get_average_score() {
        let avg = 0;
        for (let i = 0; i < this.marks.length; i++) {
            avg = avg + this.marks[i];
        }
        return `${this.studentName} average score: ${Math.round(avg / this.marks.length)}`;
    }
    get_test_score(testNumber) {
        let ans = `${this.studentName} test ${testNumber} marks: NA`;
        for (let i = 1; i <= this.marks.length; i++) {
            if (testNumber === i) {
                ans = `${this.studentName} test ${testNumber} marks: ${this.marks[i-1]}`;
            }
        }
        return ans;
    }
}
let name = readLine();
let newStudent = new Student(name);
let noOfTest = parseInt(readLine());
let marks = [];
for (let i = 0; i < noOfTest; i++) {
    marks[i] = parseInt(readLine());
}
newStudent.enter_score(marks);
let testCases = parseInt(readLine());
// while (testCases--) {
//     let test = readLine();
//     if (test === "get_marks") {
//         let testNumber = parseInt(readLine());
//         console.log(newStudent.get_test_score(testNumber));
//     } else if (test === "average") {
//         console.log(newStudent.get_average_score());
//     } else {
//         console.log("NA");
//     }
// }
for (let i = testCases; i > 0; i--) {
    let test = readLine();
    if (test === "get_marks") {
        let testNumber = parseInt(readLine());
        console.log(newStudent.get_test_score(testNumber));
    } else if (test === "average") {
        console.log(newStudent.get_average_score());
    } else {
        console.log("NA");
    }
}