let count = 0;
let seconds = 10;
// 1. Your variable is named 'progress'
let progress = document.querySelector('.progress-fill');
let status = document.querySelector('.status-text');
let intv  = setInterval(function(){
    if(count < 100){
        count++;
        // 2. Fix: Use the correct variable name 'progress' here
        progress.style.width = `${count}%`;
        status.textContent = `Downloading... ${count}%`;
    }

    else{clearInterval(intv);
        status.textContent = 'Download Complete!';
    }
}, (seconds*1000)/100); //that is the time for each percentage increment, so total time is 10 seconds for 100%