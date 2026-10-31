fetch("https://randomuser.me/api/")

.then((rawdata) =>{
    console.log(rawdata);
    
}).catch((err) =>{
    console.log(err);
    
});