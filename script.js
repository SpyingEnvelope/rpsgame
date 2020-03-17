let computerResult;
let playerResult;
let playerScore = 0;
let computerScore = 0;

function computerPlay () {
    let computerArray = ["ROCK", "PAPER", "SCISSORS"];
    computerResult = computerArray[Math.floor(Math.random()*computerArray.length)];
}

function playerPlay () {
    playerResult = prompt('Let\'s play rock paper scissors! Type in your selection', '');
    playerResult = playerResult.toUpperCase();
}

function playRound () {
    computerPlay();
    playerPlay();

    if (playerResult === 'ROCK' && computerResult === 'ROCK') {
        alert('CPU played rock as well. It\'s a draw!');
    }
    else if (playerResult === 'ROCK' && computerResult === 'PAPER') {
        alert('CPU played paper. You lose!');
        computerScore = ++computerScore;
    }
    else if (playerResult === 'ROCK' && computerResult === 'SCISSORS') {
        alert('CPU played scissors. You win!');
        playerScore = ++playerScore;
    }
    else if (playerResult === 'PAPER' && computerResult === 'ROCK') {
        alert('CPU played rock. You win!');
        playerScore = ++playerScore;
    }
    else if (playerResult === 'PAPER' && computerResult === 'PAPER') {
        alert('CPU played paper as well. It\'s a draw!');
    }
    else if (playerResult === 'PAPER' && computerResult === 'SCISSORS') {
        alert('CPU played scissors. You lose!');
        computerScore = ++computerScore;
    }
    else if (playerResult === 'SCISSORS' && computerResult === 'ROCK') {
        alert('CPU played rock. You lose!');
        computerScore = ++computerScore;
    }
    else if (playerResult === 'SCISSORS' && computerResult === 'PAPER') {
        alert('CPU played paper. You win!');
        playerScore = ++playerScore;
    }
    else if (playerResult === 'SCISSORS' && computerResult === 'SCISSORS') {
        alert('CPU played scissors as well. It\'s a draw!');
    }
    else {
        alert('Please type in rock, paper, or scissors');
        playRound();
    };

}

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (playerScore < computerScore) {
        alert(`CPU wins this time! CPU won ${computerScore} times and you won ${playerScore} times`);

    }
    else if (computerScore < playerScore) {
        alert(`You win this time! CPU won ${computerScore} times and you won ${playerScore} times`)
    }
    else {
        alert(`Looks like it's a draw! CPU won ${computerScore} times and you won ${playerScore} times`)
    }
}