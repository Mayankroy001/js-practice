function createPencil(name, brand, Qty, color){
this.name = name;
this.brand = brand;
this.Qty = Qty;
this.color = color;

this.write = function(text){
let h1 = document.createElement("h1");
h1.innerText = text;
h1.style.color = color;
document.body.append(h1);

}


}

let pencil1 = new createPencil("Nataraj", "brand", 10, "Red");
let pencil2 =  new createPencil("Doms", "ITC", 50, "green");