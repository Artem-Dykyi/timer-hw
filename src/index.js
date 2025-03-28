const timer = document.querySelector(".timer")
const timerText = document.querySelector(".timer-text")

let timerTime = 60

const intervalTime = setInterval(updateTimerDisplay, 60000)

function updateTimerDisplay() {

    timerTime -= 1
    timer.textContent = `${timerTime}`

    if(timerTime === 30){
        timerText.textContent="Залишилось менше половини часу"
    }

    if (timerTime === 0) {
        clearInterval(intervalTime);
        timerText.textContent = "Час вийшов!";
    }
}



// const timerSecText = document.querySelector(".timer-sec-text")
// const timerSec = document.querySelector(".timer-sec")
// const timerAnim = document.querySelector(".timer-anim")
// const btnAnim = document.querySelector(".btn-anim")

// let timerSecTime = 30
// let positionX = 0;


// const intervalSec = setInterval(updateAnima, 100)

// function updateAnima(){
//     timerSecTime -= 1

//     timerSecText.textContent =`${timerSecTime}`

//     if(timerSecTime === 10){
//         positionX += 100;
//         timerAnim.style.transform = `translateX(${positionX}px)`
//     }

//     if(timerSecTime === 0){
//         clearInterval(intervalSec);
//         btnAnim.disabled = false
//     }
// }

// btnAnim.addEventListener("click", updateAnima)

// btnAnim.addEventListener("click", () => {
//     btnAnim.disabled = true;
//     timerSecTime = 30;
//     timerAnim.style.transform = "translateX(0)";
//     updateAnima();
// });









const timerSecText = document.querySelector(".timer-sec-text");
const timerAnim = document.querySelector(".timer-anim");
const btnAnim = document.querySelector(".btn-anim");

let timerSecTime = 30;
let positionX = 0;
let intervalSec = null; 

function updateAnima() {
    timerSecTime -= 1;
    timerSecText.textContent = `${timerSecTime}`;

    if (timerSecTime === 10) { 
        positionX += 100; 
        timerAnim.style.transform = `translateX(${positionX}px)`;
    }

    if (timerSecTime === 0) { 
        clearInterval(intervalSec); 
        btnAnim.disabled = false; 
        return;
    }
}

function startTimer() {
    clearInterval(intervalSec); 
    timerSecTime = 30; 
    positionX = 0; 
    timerAnim.style.transform = "translateX(0)"; 
    btnAnim.disabled = true; 

   
    intervalSec = setInterval(updateAnima, 100);
}



btnAnim.addEventListener("click", startTimer);







