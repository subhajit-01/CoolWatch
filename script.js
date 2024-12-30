let seconds = document.querySelector(".seconds");
let minute = document.querySelector(".minutes");
let hour = document.querySelector(".hour");
// let ms = document.querySelector(".ms");

let second = 0,
    minutes = 0,
    hours = 0;
    // miliseconds =0;
let timer;
let isRunning =false;
function startButton() {
    if(isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        // miliseconds++;

    // if(miliseconds===1000){
    //     miliseconds=0;
        second++;
        if (second === 60) {
            second = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    
        // ms.innerText= miliseconds.toString().padStart(3,0)
        seconds.innerText = second.toString().padStart(2, 0);
        minute.innerText = minutes.toString().padStart(2, 0);
        hour.innerText = hours.toString().padStart(2, 0);
    },1000);
}

function buttons() {
    let start = document.querySelector(".start");
    let stop = document.querySelector(".stop");
    let reset = document.querySelector(".reset");

    start.addEventListener("click", () => {
        startButton();
    });
    stop.addEventListener("click", () => {
        clearInterval(timer);
        isRunning =false;
    });
    reset.addEventListener("click", () => {
        second = 0;
        minutes = 0;
        hours = 0;
        seconds.innerText = "00";
        minute.innerText = "00";
        hour.innerText = "00";
        clearInterval(timer);
        isRunning =false;
    })

}
buttons();
