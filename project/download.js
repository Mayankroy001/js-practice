let count = 0;
// 1. Your variable is named 'progress'
let progress = document.querySelector('.progress-fill');
let status = document.querySelector('.status-text');
setInterval(function(){
    if(count < 100){
        count++;
        // 2. Fix: Use the correct variable name 'progress' here
        progress.style.width = `${count}%`;
        status.textContent = `Downloading... ${count}%`;
    }
}, 100);