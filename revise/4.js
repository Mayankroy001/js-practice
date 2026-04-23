let form = document.querySelector('form');
let main = document.querySelector('main');
form.addEventListener("submit", function(dets) {
    dets.preventDefault();  
    console.log(dets);
    
}); 