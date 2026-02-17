let img = document.createElement("img");
img.setAttribute("src", "https://images.unsplash.com/photo-1720884413532-59289875c3e1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
img.classList.add("placeholder");
 document.querySelector("div").prepend(img);