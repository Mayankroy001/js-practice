let body = document.querySelector("body");
body.style.backgroundColor = "black";

let h1 = document.querySelector("h1");

h1.addEventListener("click", function(){
    h1.style.color = "red";
});
console.dir(h1);

let p = document.querySelector("p");
p.addEventListener("click", function(){
    p.style.color= "blue";
});
console.dir(p);

//Double click event

let h2 = document.querySelector("h2");
h2.addEventListener("dblclick", function(){
    h2.style.color = "green";
});
console.dir(h2);


//input

let input = document.querySelector("input");
input.addEventListener("input", function(dets){
    if(dets.data !== "null"){
        console.log(dets.data);
        
    }

});


let sel = document.querySelector("select");
sel.addEventListener("change", function(dets){
    console.log(dets.target.value);
    
});

let select = document.querySelector("#Select");
let device = document.querySelector("#device");
select.addEventListener("change", function(dets){
    device.textContent = `${dets.target.value} devices selected`;
    device.style.color = "white";
});