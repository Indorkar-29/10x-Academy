let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n = parseInt(readLine());
let shoes = readLine().split(" ");
let shoeMap = new Map();
let sum = 0;
for (let i = 0; i < shoes.length; i++) {
    let shoeSize = parseInt(shoes[i]);
    if (shoeMap.has(shoeSize))
        shoeMap.set(shoeSize, shoeMap.get(shoeSize) + 1);
    else
        shoeMap.set(shoeSize, 1);
}
let noOfCustomer = parseInt(readLine());
for (let i = 0; i < noOfCustomer; i++) {
    let customerInfo = readLine().split(" ");
    let expectedShoeSize = parseInt(customerInfo[0]);
    let amount = parseInt(customerInfo[1]);
    if (shoeMap.has(expectedShoeSize)) {
        sum += amount;
        if (shoeMap.get(expectedShoeSize) === 1)
            shoeMap.delete(expectedShoeSize);
        else
            shoeMap.set(expectedShoeSize, shoeMap.get(expectedShoeSize) - 1);
    }
}
console.log(sum);



// let no_of_shose = parseInt(readLine());
// let shop = new Map();
// let shose_size = readLine().split(" ");
// for(let i = 0; i < no_of_shose; i++){
//     if(shop.has(shose_size[i])){
//         //shop.get(shose_size[i]) +=1;
//         shop.set(shose_size[i] ,shop.get(shose_size[i])+1);
//     }
//     else{shop.set(shose_size[i],1)}
// }
// let ans = 0;
// let no_of_cust = parseInt(readLine());
// for(let i = 0; i < no_of_cust; i++){
//     let cust_di = readLine().split(" ")
//     let shose_size_cust = cust_di[0];
//     let shose_prise = parseInt(cust_di[1]);
//     if(shop.has(shose_size_cust)){
//         shop.set(shose_size[i] ,shop.get(shose_size[i])-1);
//         ans += shose_prise;
//         console.log(shose_prise)
//         if(shop.get(shose_size[i]) === 0){
//             shop.delete(shose_size_cust)
//         }
//     }
// }
// console.log(ans)