let form = document.querySelector('form');
let inputs = document. querySelectorAll('input');
let main = document.querySelector('# main');


form.addEventListener("submit", function(dets){
    dets.preventDefault();


    let card = document.createElement('div');
card.classList.add('card');

let profile = document.createElement('div');
profile.classList.add('profile');

let img = document.createElement('img');
img.setAttribute('src', 'https://images.unsplash.com/photo-1761839257349-037aea1d94de?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

let h1 = document.createElement('h1');
h1.textContent = "Rahul Roy";
let h3 = document.createElement('h3');
h3.textContent = "Web Developer";
let p = document.createElement('p');
p.textContent = "Gaar maro";


profile.appendChild(img);
card.appendChild(profile);
card.appendChild(h1);
card.appendChild(h3);
card.appendChild(p);

main.appendChild(card);
});

