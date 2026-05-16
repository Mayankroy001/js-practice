let ct = 20;

let int = setInterval(function(){
    if(ct>=1){
        console.log(`ct: ${ct} - hello world`);
        ct--;
    }

    else{
        clearInterval(int);
        console.log("time up");}
}, 2000);