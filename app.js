//make the computer choose a random out of rock paper scissors
const computerChoices = ['rock', 'paper', 'scissors'];
// get buttons
const buttons = document.querySelectorAll('.choice-buttons');
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
    let choice = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[choice];
}


// take the player movement from the button clicked and register it
function playerMove(buttonClick){
    console.log(`Player chose ${buttonClick.target.id}`);
    if (playerWins === 5 || computerWins === 5)
    {
        console.log("this shouldnt run");
        return;
    }
    Round(buttonClick.target.id);
}


// register onclick event for each button
buttons.forEach((button) => button.addEventListener('click', playerMove));


//make a round of rock paper scissors
function Round(playerInput)
{
    computerInput = ComputerPlay();
    console.log(`Computer chose ${computerInput}`);
    // check for draw
    if (playerInput == computerInput)
    {
        UpdateScores();
        return 'draw';
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
        console.log(`Player won this round total rounds won: ${++playerWins}`);
    }
    else
    {
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
    gameUI.style.display = 'flex';
    results.innerHTML = ''
    results.style.flexDirection = 'row';
    results.style.justifyContent = 'space-around';
    playerWins = 0;
    computerWins = 0;
}