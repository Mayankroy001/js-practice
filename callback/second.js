function joMarzi(fnc){

    setTimeout(fnc, Math.floor(Math.random()*10*1000));

    
}

joMarzi(function(){
    console.log("hi");
    
}) 