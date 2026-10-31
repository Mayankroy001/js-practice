let pr = new Promise((resolve, reject) => {
    
   setTimeout(() => {
     let rn = Math.floor(Math.random()*10);

    if(rn>5) resolve("resolved with : " + rn);
    else reject("rejected with : " + rn);
   }, 3000);

});

pr.then(function(value){
    console.log(value);
    
}).catch(function(value){
    console.log(value);
    
})