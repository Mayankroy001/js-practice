class user{
  constructor(name, address, username, email, color) {
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.color = color;
  this.role = "user";
  }     

  write(text) {

  let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.append(h1);
  }
}
class Admin extends user{
    constructor(name, address, username, email, color) {
        super(name, address, username, email, color);
        this.role = "admin";
    }


   remove(){
    document.querySelectorAll("h1").forEach (function(elem){
        elem.remove();
    });
   }
}


let u1 = new user("mayank", "delhi", "mayank123", "mayank@example.com", "blue");
let u2 = new user("rahul", "mumbai", "rahul456", "rahul@example.com", "green");
let a1 = new Admin("admin", "new york", "admin123", "admin@example.com", "red");