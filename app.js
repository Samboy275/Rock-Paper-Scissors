//make the computer choose a random out of rock paper scissors
const computerChoices = ['rock', 'paper', 'scissors'];

function ComputerPlay()
{
    let choice = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[choice];
}

//make a round of rock paper scissors
function Round(playerInput, computerInput)
{
    // check for draw
    if (playerInput == computerInput)
    {
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
        return 'you won'; // player wins
    }
    else
    {
        return 'you lost' // player lost
    }
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
        // check who 
        switch(result)
        {
            case 'win':
                playerWins++;
                break;
            case 'lose':
                computerWins++;
                break;
        }
        console.log(result);
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
game();