let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10)
}

const compareGuesses = (user, comp, target) => {
let humanDiff = Math.abs(target - user)
let compDiff = Math.abs(target - comp)
if (humanDiff === compDiff) {
  return true
} else if (humanDiff < compDiff) {
  return true
} else if (compDiff < humanDiff) {
  return false
}
}

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++
  } else if (winner === 'computer') {
    computerScore++
  }
}

const advanceRound = () => {
  currentRoundNumber++
}