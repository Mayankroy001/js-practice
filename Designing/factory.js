function createProduct(name, price){
let stock = 10;
return{

    name,
    price,
    checkStock(){
 console.log(`We have ${stock} pieces of ${name} remaining`);
    },


    buy(qty){
        if(qty <= stock){
            stock =- qty;
            console.log(`${qty} pieces bought - ${stock} remaining`);
        }else{
        console.error(`we have only ${stock} pieces remaining`);
        }
    },


    restock(qty){
        stock =+ qty;
        console.log(`${qty} pieces added - ${stock} remaining`);
}

}
}

let iphone = createProduct('iPhone', 710);
let kitakat = createProduct('Kitkat', 50);