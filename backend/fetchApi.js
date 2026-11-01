fetch("https://randomuser.me/api/?results=5")

.then((raw) =>{return raw.json();})
.then((data) =>{
    console.log(data);
});