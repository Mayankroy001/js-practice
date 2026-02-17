let inp = document.querySelector("input");
inp.addEventListener("input", function(dets){
   if(dets.data !== null){
    console.log(dets.data);
    console.dir(dets);
   } 
    
},);

let select =document.querySelector("select");
let DeviceSelected = document.querySelector("#DeviceSelect");
select.addEventListener("change", function(dets){
DeviceSelected.textContent = `${dets.target.value} device selected`;

});

