fetch("https://randomuser.me/api/?results=5")
   .then(raw => raw.json())
   .then(data => console.log(data))