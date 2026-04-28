let ul = document.querySelector('ul');
ul.addEventListener('click', function (dets){
    dets.target.classList.toggle('lt'); //use (toggle)this majorly , you can by single tap enable line through, double tap you caan disable the line-through
   // dets.target.classList.add('lt');  only can enable- line through.
});