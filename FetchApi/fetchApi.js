fetch("https://randomuser.me/api/")

.then((rawData){

    console.log(rawData);
    
}).catch((err){
    console.log(err);
    
})