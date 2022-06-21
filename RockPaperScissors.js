let options = ['rock','paper','scissors'];
let computerValue = '';
let playerValue = '';

function computerPick() {
    computerValue = Math.floor((Math.random() * 3))
    console.log('\nNEW GAME:\ncomputer: '+options[computerValue],`\nplayer: ${options[playerValue]}`)
}

const promptBox = document.querySelector('#promptBox');
promptBox.innerText = 'Rock, paper, or scissors?'

const outcome = document.querySelector('#outcome');
outcome.innerText = 'Pick one of the below';


const rock = document.getElementById("rock")
rock.addEventListener('click', clickRock);

const paper = document.getElementById("paper")
paper.addEventListener('click', clickPaper);

const scissors = document.getElementById("scissors");
scissors.addEventListener('click', clickScissors);

const playAgainButton = document.getElementById('playAgain')
playAgainButton.style.display = 'none';
playAgainButton.addEventListener('click', playAgain);

function clickRock() {
    playerValue = 0;
    gameTime();
}

function clickPaper() {
    playerValue = 1;
    gameTime();
}

function clickScissors() {
    playerValue = 2;
    gameTime();
}


function assessWinner(){
     if (playerValue == computerValue) {
        return `You draw! Computer picked ${options[computerValue]}`
     } else if (playerValue == 0 && computerValue == 2) {
         return `You win! Computer picked    ${options[computerValue]}`
     } else if (playerValue == 2 && computerValue == 2) {
         return `You lose! Computer picked ${options[computerValue]}`         
     } else if (playerValue > computerValue) {
         return `You win! Computer picked ${options[computerValue]}`
     } else {
         return `You lose! Computer picked ${options[computerValue]}`
     }
}

function playAgain() {
    //activate when playAgain button clicked
    playAgainButton.style.display = 'none';
    rock.style.display = 'inline'
    paper.style.display = 'inline'
    scissors.style.display = 'inline'
    outcome.innerText = 'Pick one of the below';
}

function gameTime() {
    rock.style.display = 'none'
    paper.style.display = 'none'
    scissors.style.display = 'none'
    computerPick()
    outcome.innerText = assessWinner()
    playAgainButton.style.display = 'block'
}