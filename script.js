let randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 10;

function checkGuess(){
  attempts--;
  const inputElement = document.getElementById("guess");
  let guess = inputElement.value;
  const feedbackElement = document.getElementById("feedback");
  while(attempts > 0){
    if (guess===randomNumber){
      feedbackElement.innerHTML = "Success!";
      feedbackElement.style.color = "Green";
      attempts = 0;
      break;
    }
    else if(guess<randomNumber){
      feedbackElement.innerHTML = "Too low! Try again" + "<br>" + "Attempts left: " + attempts;
      break;
    }
    else{
      feedbackElement.innerHTML = "Too high! Try again";
      print("Attempts left: " + attempts);
      break;
    }
  }
  if(attempts === 0 && guess != randomNumber){
    feedbackElement.innerHTML = "Game over"
    feedbackElement.style.color = "Red";
  }
}
