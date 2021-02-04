const diceScore = document.querySelector("#score");
let diceImg = document.querySelector("#result");
let diceRoll = document.querySelector("#rolldice")
let header = document.querySelector("#header");
let diceArr =[];

function rollDice() {
    let rollResult = Math.floor(Math.random() * 6) + 1;
    if (rollResult == 1) {
        diceScore.textContent ="You Lose!"
        diceArr = [];
        diceRoll.textContent = "Start Again!"
    } else {
        diceScore.textContent = "Score:  " + rollResult;
        diceArr.push(rollResult);
        let sum = diceArr.reduce((a, b) => {
            return a + b;
        
    });
    diceScore.textContent = "Score: " + sum
    if (sum >= 20){
        diceScore.textContent = "Score:  " + sum + " - You Win!"
        diceRoll.textContent = "Start Again!";
        diceArr=[]
    }
    }

      diceImg.innerHTML ='<img src = "img/dice' + rollResult + '.png">';
    } 
    diceRoll.addEventListener("click", () => {
        if(diceRoll.textContent = "Start Again!"){
            diceRoll.textContent = "Roll"
        }
        rollDice();
});