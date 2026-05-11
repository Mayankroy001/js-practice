let nm = document.querySelector("#name");
let from = document.querySelector("form");

from.addEventListener("submit", function(dets){
    dets.preventDefault();
    if(nm.value.length <=2 ){
        br.textContent = "name should greater then two chars"
    }
});