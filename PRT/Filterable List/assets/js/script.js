const value=document.getElementById('value');

value.addEventListener('input',getValue);

function getValue(e){
    let countryName=e.target.value;
    let option=document.getElementById('filter').value;
    fetch("https://github.com/thm/uinames/blob/master/uinames.com/api/names.json")
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err));
}