//Variables
var wordBank = ["rivendell", "hobbit", "shire", "samwise", "aragon", "legolas"]
var computerChoice = [];
var lettersInWord = [];
var blanks=0;
var blanksAndGuesses = [];
var wrongGuesses = [];

//counters
var wins = 0;
var losses = 0;
var chances = 9;

//Functions
function myFunction() {
  computerChoice = wordBank[Math.floor(Math.random()* wordBank.length)];
  lettersInWord = computerChoice.split("");
  blanks= lettersInWord.length;
  chances = 9;
  wrongGuesses = [];
  blanksAndGuesses= [];
      for (var i=0; i<blanks; i++){
    blanksAndGuesses.push("_");
  }

    console.log(computerChoice);
    console.log(lettersInWord);
    console.log(blanks);
    console.log(blanksAndGuesses);
  
    document.getElementById("blanksAndGuesses").innerHTML = blanksAndGuesses.join(" ");
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("remainingGuesses").innerHTML = chances;
}

function checkLetters(letter){
   
   var letterInWord = false;

      for (var i=0; i<blanks; i++){
        if (computerChoice[i] == letter){
          letterInWord = true;

        }
      }

      if (letterInWord){
        for(var i=0; i<blanks; i++){
           if(computerChoice[i] == letter) {
              blanksAndGuesses[i] = letter;
            }
          }
        }

    else {
      wrongGuesses.push(letter);
      chances --
    }

    if (chances == 0) {
      losses++;
    document.getElementById("losses").innerHTML = losses;
    myFunction();
    alert("You Lose!");
  }

    else if (lettersInWord.toString()== blanksAndGuesses.toString()){
    wins++;
    alert("You win!");
    document.getElementById("wins").innerHTML = wins;
    myFunction();

  }

      console.log(blanksAndGuesses);
      document.getElementById("remainingGuesses").innerHTML = chances;
      document.getElementById("blanksAndGuesses").innerHTML = blanksAndGuesses.join(" ");
      document.getElementById("wrongGuesses").innerHTML = wrongGuesses;
    }

//Process
myFunction() 
document.onkeyup = function(event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(letterGuessed);
  console.log(letterGuessed);
}



