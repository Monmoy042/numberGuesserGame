let min = 1;
let max = 10;
let chances = 2;

// Get a Random Value
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
let correct_ans = getRandomNumber(min, max);

// Show Output
const showOutput = (message, e) => {
  document.getElementById("output").textContent = message;
};

for (let i = 0; i <= 2; i++) {
  let userInput = parseInt(prompt("Enter a number between 1 to 10?"));
  console.log(userInput);
  if (userInput > correct_ans) {
    let message = "Correct answer is  smaller!";
    alert(`${message} | You have ${chances - i} attempts left!`);
  } else if (userInput < correct_ans) {
    let message = "Correct answer is greater!";
    alert(`${message} | You have ${chances - i} attempts left!`);
  } else if (userInput == correct_ans) {
    let message = "You Win 👏";
    alert(`${message} | You have ${chances - i} attempts left!`);
    showOutput(message);
    break;
  }
  if (i == 2) {
    let message = "You Loose 😢";
    alert(`${message} | You have ${chances - i} attempts left!`);
    showOutput(message);
    break;
  }
}
