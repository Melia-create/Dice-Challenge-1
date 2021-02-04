const diceScore = document.querySelector("#score");
let diceImg = document.querySelector("#result");
let diceRoll = document.querySelector("#rolldice")
let diceArr =[];

function rollDice() {
    let rollResult = Math.floor(Math.random() * 6) + 1;
    if (rollResult == 1) {
        diceScore.textContent ="You Lose!"
    } else {
        diceScore.textContent = "Score:  " + rollResult;
        diceArr.push(rollResult);
        diceArr = [];
    }
      diceImg.innerHTML ='<img src = "img/dice' + rollResult + '.png">';
    } 
    diceRoll.addEventListener("click", () => {
        rollDice();
    });
