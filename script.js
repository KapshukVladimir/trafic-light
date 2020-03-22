let timeForWait = 10;
let timeForGo = 10;
let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");
let count = document.querySelector(".count");
let p = document.createElement('p');
p.classList.add('count');
let starter;


function activeRed() {
    count = timeForWait;
    red.classList.add('active');
    red.appendChild(p);
    p.innerHTML = count;
    count--;
    timeForWait = count;
}
function activeYellow() {
    yellow.classList.add('active');
}
function activeGreen() {
    count = timeForGo;
    green.classList.add('active');
    green.appendChild(p);
    p.innerHTML = count;
    count--;
    timeForGo = count;
}
activeRed();
function mainTimer() {

    let timerRed = setInterval(() => {
        activeRed();
        if (count === 4) {
            red.classList.remove('active');
        }
        if (count === 3) {
            red.classList.add('active');
        }
        if (count === 2) {
            red.classList.remove('active');
        }
        if (count < 2 && count >= 0) {
            p.remove();
            activeYellow();
        }
        if (count == -1) {
            clearInterval(timerRed);
            red.classList.remove('active');
            p.remove();
            yellow.classList.remove('active');
        }

        if (count == 0) {
            let timerGreen = setInterval(() => {
                activeGreen();
                if (count === 4) {
                    green.classList.remove('active');
                }
                if (count === 3) {
                    green.classList.add('active');
                }
                if (count === 2) {
                    green.classList.remove('active');
                }
                if (count < 2 && count >= 0) {
                    green.classList.remove('active');
                    activeYellow();
                    p.remove();
                }
                if (count == 0) {
                    clearInterval(timerGreen);
                    green.classList.remove('active');
                    p.remove();
                    yellow.classList.remove('active');
                    mainTimer();
                    timeForWait = 10;
                    timeForGo = 10;
                }
            }, 1000);
        }
    }, 1000);
}
mainTimer();