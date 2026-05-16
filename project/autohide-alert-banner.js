let alert = document.querySelector('.alert-box');
let time = setTimeout(function() {
    if (alert) {
        alert.style.display = 'none';
    }
}, 3000);