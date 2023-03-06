const weight=document.getElementById('weight');
weight.addEventListener('input',converter);
function converter(e){
    let pounds=e.target.value;
    document.getElementById('gram').innerText=(pounds/0.0022046).toFixed(2);
    document.getElementById('kiloGram').innerText=(pounds/2.2046).toFixed(2);
    document.getElementById('ounces').innerText=(pounds*16).toFixed(2);
}