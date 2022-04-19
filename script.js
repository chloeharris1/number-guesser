let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Generate a random secret target number between 0 and 9
const generateTarget = (number) => {
    return Math.floor(Math.random()*10);
    };

// Function to determine which guess is closest to the target number
const compareGuesses = (userGuess, computerGuess, targetGuess) => {

// Comparing the absolute value of the difference between the target and each guess using Math.abs()
const humanDifference = Math.abs(targetGuess - userGuess)
const computerDifference = Math.abs(targetGuess - computerGuess)
    
if (humanDifference <= computerDifference) {
      return humanDifference <= computerDifference;
    } 
    };

// Function to increase the winner's score after each round
const updateScore = winner => {
    if (winner === 'human') {
      humanScore ++; 
    } else if (winner === "computer") {
      computerScore++;
    }
    };

// Function to update the round number after each round
const advanceRound = () => {
    currentRoundNumber++; 
    };
    