let box = document.querySelector('.box');

box.addEventListener('mouseover', function(dets){
   box.style.backgroundColor = 'blue';
    
});

box.addEventListener('mouseout', function(){
    box.style.backgroundColor = 'red';
});