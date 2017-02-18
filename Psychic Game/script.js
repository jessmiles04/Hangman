var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];
var psychicLetters = null;
var wins = 0;
var losses = 0;
var guessesLeft = 9;



 
    var updateGuessesLeft = function(){
        document.getElementById("guesses-left").innerHTML = guessesLeft;
    };
   var updatePsychicLetters = function() {
     
     this.psychicLetters = this.choices[Math.floor(Math.random() * this.choices.length)];
   };
   var updateGuessesSoFar = function() {
     
     document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
   };


var reset = function() 
{
    
     guessesLeft = 9;
     guessedLetters = [];
     updatePsychicLetters();
     updateGuessesLeft();
     updateGuessesSoFar();
};

   

document.onkeyup = function(event) {

  guessesLeft--;

  var choices = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(choices);

  updateGuessesLeft();
     updateGuessesSoFar();

    if (psychicLetters === choices) {
        wins++;
        reset();
        document.querySelector("#wins").innerHTML = wins;
      }

    if (guessesLeft === 0) {
      losses++;
      document.querySelector("#losses").innerHTML = losses;
      reset();
      
    }
    



};