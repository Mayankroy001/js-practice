function abcd() {
    var age = 12;
}
console.log(age);
//functional scope === kyuki upaar fuinction ke andar variable define kiya hai to wo variable sirf us function ke andar hi accessible hoga. Isliye console.log(age) me error aayega ki age is not defined.

var name = "John";
//yeh global scope me define kiya gaya hai isliye yeh variable globally accessible hoga. Isliye console.log(name) me "John" print hoga.

console.log(name);


if(age > 10) {
    console.log("$Age is greater than 10");
}

//yeh block scope hai. Isliye age variable ko access karne ki koshish karenge to error aayega ki age is not defined.