let abcd = document.getElementById("abcd");
console.log(abcd);
console.dir(abcd);


let efgh = document.getElementsByClassName("efgh");
console.log(efgh);
console.dir(efgh);

let abcdb = document.querySelector("abcd");


//manipulation by id ====================================
let manipulation = document.querySelector("#manipulation");
console.dir(manipulation);
manipulation.textContent = "hey mayank kemcho";

//manipulation without id ================================
let h3 = document.querySelector("h3");
console.dir(h3);
h3.textContent = "im mayank patel";



// ATTRIBUTE MANIPULATIOMN ============================

let a = document.querySelector("a");
console.dir(a); 
a.href = "https://www.google.com";


//DYNAMIC DOM MANIPULATION =========================

 let h4 = document.createElement("h4");
 h4.textContent = "HEllo ji";
 document.body.appendChild(h4);


 let h2 = document.createElement("h2");
 h2.textContent = "hello puja ji aap firse wapis ageyi !";
 document.querySelector("div").appendChild(h2);


 // js se css kaise badle =========================

 let css = document.querySelector("#css");
 console.dir(css);
 css.style = "color: red; background-color: yellow; border: 2px solid black; padding: 10px; margin: 10px; text-align: center; font-size: 20px; font-family: Arial, sans-serif;";