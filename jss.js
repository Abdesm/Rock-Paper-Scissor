// Get DOM elements
const userChoiceText = document.getElementById("user-choice");
const computerChoiceText = document.getElementById("computer-choice");
const outcomeText = document.getElementById("outcome");
const resetButton = document.getElementById("reset-btn");

const choices = document.querySelectorAll(".choice");

// Functions to determine the game result
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

// Event listeners for user choices
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    const userChoice = e.target.id;
    const computerChoice = getComputerChoice();

    // Set user choice text and animate it
    userChoiceText.textContent = `Your choice: ${userChoice}`;
    userChoiceText.style.animation = "fadeIn 1s ease-out forwards";

    // Set computer choice text and animate it with a delay
    computerChoiceText.textContent = `Computer's choice: ${computerChoice}`;
    computerChoiceText.style.animation = "fadeIn 1s ease-out forwards";
    computerChoiceText.style.animationDelay = "1s"; // delay for smoother transition

    // Determine winner
    const result = determineWinner(userChoice, computerChoice);

    // Display the result and animate it
    outcomeText.textContent = `Result: ${result}`;
    outcomeText.style.animation = "fadeIn 1s ease-out forwards";

    // After 3 seconds, show the Play Again button
    setTimeout(() => {
      resetButton.style.display = "block";
    }, 3000);
  });
});

// Reset game
resetButton.addEventListener("click", () => {
  userChoiceText.textContent = "Your choice: ";
  computerChoiceText.textContent = "Computer's choice: ";
  outcomeText.textContent = "Result: ";

  // Reset visibility and animations
  userChoiceText.style.animation = "";
  computerChoiceText.style.animation = "";
  outcomeText.style.animation = "";

  // Hide play again button
  resetButton.style.display = "none";
});
