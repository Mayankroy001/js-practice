let count = 0;
let seconds = 10;
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
}, (seconds*5000)/100); //that means 5 seconds for 100% so 5000ms/100 = 50ms per percent increase