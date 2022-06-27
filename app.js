//make the computer choose a random out of rock paper scissors
const computerChoices = ['rock', 'paper', 'scissors'];
// get buttons
const buttons = document.querySelectorAll('button');
// results div 
const results = document.querySelector('#results');
// tracking rounds of player and computer
let playerWins = 0;
let computerWins = 0;

// make random move by computer
function ComputerPlay()
{
    let choice = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[choice];
}


// take the player movement from the button clicked and register it
function playerMove(buttonClick){
    console.log(`Player chose ${buttonClick.target.id}`);
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
    results.innerHTML = `<h2>Player Score: ${playerWins}</h2><h2>Computer Score: ${computerWins}</h2>`
}
//a game consists of 5 rounds in each round
function game(){
    // welcome the player
    alert("welcome to rock paper scissors");
    // keep count of how many rounds the player or the computer won
    let playerWins = 0;
    let computerWins = 0;
    for (i = 0; i < 5; i++)
    {
        //get the computer's move
        let computerMove = ComputerPlay();
        //get the player's move and make it case insensitive
        let playerMove = prompt("Input Your Move");
        playerMove = playerMove.toLowerCase();
        let result = Round(playerMove, computerMove);
        console.log(`Computer Move ${computerMove}`);
        console.log(`Player Move ${playerMove}`);
        // check who won
        switch(result)
        {
            case 'you won':
                playerWins += 1;
                break;
            case 'you lost':
                computerWins += 1;
                break;
        }
        console.log(result + ` Your Score : ${playerWins}, Computer Score : ${computerWins}`);
    }
//output game winner
    if(playerWins > computerWins)
    {
        console.log(`Player won by ${playerWins} rounds out of 5`);
    } else {
        console.log(`Computer won by ${computerWins} rounds out of 5`);
    }
}

// start the game
