fetch("https://randomuser.me/api/?results=5")
  .then((raw) => raw.json())
  .then((data) => {
data.results.forEach(function (user) {

   
// Create user card
const userCard = document.createElement("div");
userCard.className = "user-card";

// Create avatar
const avatar = document.createElement("img");
avatar.src = user.picture.large;
avatar.alt = "User Avatar";
avatar.className = "user-avatar";

// Create user name
const userName = document.createElement("h2");
userName.className = "user-name";
userName.textContent = `${user.name.first} ${user.name.last}`;

// Create user email
const userEmail = document.createElement("p");
userEmail.className = "user-email";
userEmail.textContent = user.email;

// Create follow button
const followBtn = document.createElement("button");
followBtn.className = "user-btn";
followBtn.textContent = "Follow";

// Add click event
followBtn.addEventListener("click", () => {
    followBtn.textContent =
        followBtn.textContent === "Follow" ? "Following" : "Follow";
});

// Append children to user card
userCard.appendChild(avatar);
userCard.appendChild(userName);
userCard.appendChild(userEmail);
userCard.appendChild(followBtn);

// Append card to body
document.body.appendChild(userCard);

})
  }) 