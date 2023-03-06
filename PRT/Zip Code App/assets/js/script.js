let inputCode;
let info;
const zip=document.getElementById('zip');
const btn=document.getElementById('btn');

box.style.visibility="hidden";

zip.addEventListener('input',addZip);
btn.addEventListener('click',getZipDetails);

function addZip(e){
    inputCode=e.target.value;
}

function getZipDetails(){
    
 fetch(`https://api.zippopotam.us/us/${inputCode}`)
    .then((res)=>res.json())
    .then(data=>{info=data})
    .catch((err)=>console.log(err))

    if(info != undefined){
        let city=document.getElementById('city');
        let state=document.getElementById('state');
        let latitude=document.getElementById('latitude');
        let longitude=document.getElementById('longitude');
        city.textContent=info.places[0]['place name'].toUpperCase();
        state.textContent=info.places[0]['state'].toUpperCase();
        latitude.textContent=info.places[0]['latitude'];
        longitude.textContent=info.places[0]['longitude'];
        box.style.visibility="visible";
    }
}