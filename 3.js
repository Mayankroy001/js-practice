let Fileinput = document.querySelector("#Fileinput");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    Fileinput.click();
});

Fileinput.addEventListener("change", function(dets){
 const file = dets.target.files[0];
 if (file){
    btn.textContent = file.name;
 }
});