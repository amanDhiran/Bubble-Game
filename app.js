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
            gameOver();
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

function gameOver(){
    document.querySelector("#pbot").innerHTML = `<h1>Game Over</h1>`;
    document.querySelector("#new-game").classList.add("new-btn");
    document.querySelector("#start-game").classList.add("hide");
    document.querySelector("#new-game").addEventListener("click", () =>{
        document.querySelector("#new-game").classList.remove("new-btn");
        document.querySelector("#start-game").classList.remove("hide");
        newGame();
    })
}

function newGame(){
    timer = 60;
    score = 0;
    getNewHit();
    createBubbles();
    document.querySelector("#score").innerText = score;
    document.querySelector("#timer").innerText = timer;
}

function startGame(){
    runTimer();
    document.querySelector("#pbot")
        .addEventListener("click", (dets) =>{
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
document.querySelector("#start-game").addEventListener("click", () =>{
    document.querySelector("#start-game").classList.add("hide");
    startGame();
})


