let str="Shubham";
//op: A1B1H2M1S1U1

function freq(str){
    let m=new Map();
    for(let i=0;i<str.length;i++){
        if(m.has(str[i].toUpperCase())){
            m.set(str[i].toUpperCase(),m.get(str[i].toUpperCase())+1);
        }else{
            m.set(str[i].toUpperCase(),1);
        }
    }
    // console.log(m.entries().sort());
    // let ans=[];
    // for(m of m.entries()){
    //     ans.push(m.join())
    // }
    // return ans;
    return m.entries()
}
console.log(freq(str));