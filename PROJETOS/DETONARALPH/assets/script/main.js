const state = {
    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".anemy"),
        time: document.querySelector("#time"),
        score: document.querySelector("#score")

    },
    values: {
        timeId: null,
        countDownTimeId: setInterval(countDown, 1000),
        gameVelocity: 700,
        hitPosition: 0,
        result:0,
        curretTime: 60,
    },
};

function playSound(){
    let audio = new Audio("./assets/audio/hit.m4a")
    audio.volume = 0.2;
    audio.play();
}

function countDown(){
    state.values.curretTime--;
    state.view.time.textContent = state.values.curretTime;

    if (state.values.curretTime <= 0){
        alert("Game Over! O seu resultado foi " + state.values.result);
    }
}


function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    })

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function moveEnemy(){
    state.values.timeId = setInterval(randomSquare, state.values.gameVelocity)
}

function addListenerHitBox(){
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
              if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound();
            }   
    })
})
}


function initialize(){
    moveEnemy();
    addListenerHitBox();
};
initialize();