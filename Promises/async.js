let pr = new Promise((resolve, reject) => {
    
    setTimeout(() =>{
        let rn =  Math.floor(Math.random()*10);
    
        if (rn>5) resolve("Reslove with : " +rn);
        else reject("Reslove with: " + rn);
   
    },3000);
})


async function abcd() {
    try{
        let val = await pr;
        console.log(val);
        
    }catch(err){
        console.log(err);
        
    }
}
abcd();