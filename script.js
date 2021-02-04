let diceScore = document.querySelector("#score");
let diceImg = document.querySelector("#result");
let diceRoll = document.querySelector("#rolldice")
let header = document.querySelector("#header");
let startButton = document.querySelector("#strtbtn");
let diceArr =[];

startButton.style.visibility = "hidden"

function rollDice() {
    let rollResult = Math.floor(Math.random() * 6) + 1;
    if (rollResult == 1) {
        header.textContent ="You Lose!"
        startButton.style.visibility = "visible"
        diceArr = [];
    } else {
        diceScore.textContent = "Score:  " + rollResult;
        diceArr.push(rollResult);
        let sum = diceArr.reduce((a, b) => {
            return a + b;
        
    });
    diceScore.textContent = "Score: " + sum
    if (sum >= 20){
        header.textContent = "You Win!"
        startButton.style.visibility = "visible"
        diceScore.textContent = "Score:  " + sum + " - You Win!"
      diceRoll.textContent = "Start Again!"
        diceArr=[]
    }
    }

      diceImg.innerHTML ='<img src = "img/dice' + rollResult + '.png">';
    } 

    startButton.addEventListener("click", () => {
        diceArr = []
        diceScore.textContent ="0"
        header.textContent = "Let's Play!"
    });

    diceRoll.addEventListener("click", () => {
        if (header.textContent = "You Lose!" || "You Win!")
        header.textContent = "Let's Play!"
        startButton.style.visibility = "hidden";
        rollDice(); 
});