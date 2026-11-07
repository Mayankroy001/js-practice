fetch("https://randomuser.me/api/?results=5")
  .then((raw) => raw.json())
  .then((data) => {
data.results.forEach(function (user) {
   console.log(user);
})
  })