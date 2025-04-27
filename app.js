//make the computer choose a random out of rock paper scissors
const computerChoices = ['rock', 'paper', 'scissors'];
// get UI elements
const computerMoveDisplay = document.getElementById('computer-move')
const buttons = document.querySelectorAll('.choice-buttons');
const roundOutcome = document.getElementById('round-outcome');
const startButton = document.getElementById('start-game');
startButton.addEventListener('click', StartGame);
const gameUI = document.querySelector('.interactive-ui'); // game window
gameUI.style.display = 'none';
// results div 
const results = document.querySelector('#results');
// tracking rounds of player and computer
let playerWins = 0;
let computerWins = 0;
let isGameRunning = false; // tracking game status
// make random move by computer
function ComputerPlay()
{
    computerMoveDisplay.style.backgroundColor = 'brown';
    let choice = Math.floor(Math.random() * computerChoices.length);
    computerMoveDisplay.innerText = `${computerChoices[choice]}`;
    return computerChoices[choice];
}


// take the player movement from the button clicked and register it
function playerMove(buttonClick){
    buttons.forEach((button) => {
        button.classList.remove('green-bg');
        button.classList.remove('red-bg');
    });
    console.log(`Player chose ${buttonClick.target.id}`);
    if (playerWins === 5 || computerWins === 5)
    {
        console.log('this shouldnt run');
        return;
    }
    Round(buttonClick.target.id);
}


// register onclick event for each button
buttons.forEach((button) => button.addEventListener('click', playerMove));


//make a round of rock paper scissors
function Round(playerInput)
{
    const button = document.getElementById(playerInput);
    computerInput = ComputerPlay();
    console.log(`Computer chose ${computerInput}`);
    // check for draw
    if (playerInput == computerInput)
    {
        RoundOutcome('draw');
        return;
    }
    // check if player losses this round
    playerWon = false;

    if (playerInput == 'rock' && computerInput == 'scissors')
            playerWon = true
    else if (playerInput == 'paper' && computerInput == 'rock')
            playerWon = true;
    else if (playerInput == 'scissors' && computerInput == 'paper')
            playerWon = true;

    if (playerWon)
    {
        RoundOutcome('player');
        button.classList.add('green-bg');
        computerMoveDisplay.style.backgroundColor = 'red';
        console.log(`Player won this round total rounds won: ${++playerWins}`);
    }
    else
    {
        RoundOutcome('computer');
        button.classList.add('red-bg');
        computerMoveDisplay.style.backgroundColor = 'green';
        console.log(`Computer won this round total rounds won: ${++computerWins}`);
    }

    UpdateScores();
}

// update results div
function UpdateScores()
{
    if(playerWins < 5 && computerWins < 5)
    {
        results.innerHTML = `<h2>Player Score: ${playerWins}</h2><h2>Computer Score: ${computerWins}</h2>`;
        return;
    }
    else if (playerWins >= 5)
    {
        results.innerHTML = '<h2>Player won!!';
    }
    else
    {
        results.innerHTML = `<h2>Computer won!!`;
    }
    const para = document.createElement('p');
    para.textContent = 'Press Start Game button to play again';
    results.style.flexDirection = 'column';
    results.style.alignItems = 'center';
    results.style.justifyContent= `center`;
    results.appendChild(para);
}
//a game consists of 5 rounds in each round
function StartGame(e){
    computerMoveDisplay.innerText = '';
    gameUI.style.display = 'flex';
    results.innerHTML = ''
    results.style.flexDirection = 'row';
    results.style.justifyContent = 'space-around';
    playerWins = 0;
    computerWins = 0;
}


function RoundOutcome(roundWinner)
{
    
    if (roundWinner !== 'draw')
    {
        roundWinner = `${roundWinner} won this round`;
    }
    roundOutcome.innerHTML = `<h3>${roundWinner}</h3>`;
}