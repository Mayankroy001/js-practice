let img = document.querySelector("img");
img.setAttribute("src", "https://images.unsplash.com/photo-1710609942195-b9dab8f48fc6?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"); 

let h1 = document.querySelector("h1");
h1.textContent += " - Updated with JavaScript";
document.body.append(h1);   