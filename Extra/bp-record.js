let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function BPRecord(s, d) {
    this.systolic = s,
        this.diastolic = d,
        this.generateReport = function() {
            console.log("Blood Pressure is: ", this.systolic, "/", this.diastolic)
            if (this.systolic > 140 || this.diastolic > 90) {
                console.log("Diagnosis: ", "High BP");
            } else if (this.systolic < 90 || this.diastolic < 60) {
                console.log("Diagnosis: ", "Low BP");
            } else {
                console.log("Diagnosis: ", "Normal BP");
            }
        }
}
let report1 = new BPRecord(141, 90);
report1.generateReport();