var timer = 60;
var score = 0;
var hitNum;

function increaseScore(){
    score += 10;
    document.querySelector("#score").innerText = score;
}


function getNewHit(){
     hitNum = Math.floor(Math.random()*10);
    document.querySelector("#hit").innerText = hitNum;
}

function runTimer(){
    
    let timerInt = setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector("#timer").innerText = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbot").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

function createBubbles(){
    let clutter = "";

    for (let i = 0; i < 168; i++) {
        let rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`  
    }

    document.querySelector("#pbot").innerHTML = clutter;
}

function startGame(){
    
    document.querySelector("#pbot")
        .addEventListener("click", (dets) =>{
            runTimer();
            if(Number(dets.target.textContent)===hitNum){
                increaseScore();
                getNewHit();
                createBubbles();
            }
        })
}



getNewHit();
createBubbles();

document.querySelector("#score").innerText = score;
document.querySelector("#timer").innerText = timer;
startGame();


