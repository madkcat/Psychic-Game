/**
 * Array.prototype.[method name] allows you to define/overwrite an objects method
 * needle is the item you are searching for
 * this is a special variable that refers to "this" instance of an Array.
 * returns true if needle is in the array, and false otherwise
 */
Array.prototype.contains = function (p1, p2) {
   for (i in p1) {
       if (p1[i] === p2) return true;
   }
   return false;
}


//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;



//random letter from the available choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//allows the user 9 guesses
// guesses = guesses | 9
var updateGuessesLeft = function() {
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
  // guesses the user has tried displayed separated by commas
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// called when we reset "everything"
var reset = function() {
  guesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


//When key is released it becomes the users guess

     document.onkeyup = function(event) {
      
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      var x = Array(guessedLetters);
      if (x.contains(userGuess)) {
        console.log("penguin")
      }
      else {
      guessesLeft--;
      guessedLetters.push(userGuess);
      updateGuessesLeft();
      updateGuessesSoFar();
      console.log(guessedLetters)
        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Winner, Winner, Chicken Dinner!");
                reset();
            }
        }else if(guessesLeft == 0){
            // take a loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Failure. Try again?");
            // call the reset. 
            reset();
        }
      }
  } 
