setTimeout(function () {
    console.log("hello world");
}, 5000);

setInterval(function () {
    console.log("i,m Mayank");
}, 2000);


// if you want to remove or stop timeout and intervals


let tm = setTimeout(function () {
    console.log("hello world");

}, 2000);

clearTimeout(tm);


let im = setInterval(function(){
    console.log("i'm Mayank");
}, 2000);

clearInterval(im);