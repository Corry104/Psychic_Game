//JavaScript The Psychic Game


var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var loss = 0;
var guessesLeft = 10;
var userText = []; 
var userGuess = null;


console.log(win);
console.log(guessesLeft);
console.log(loss);
console.log(userGuess);
console.log(userText);

document.onkeyup = function(event)  {
    var compChoice = compChoices[Math.floor(Math.random()*compChoices.length)];
    userGuess = event.key
    userText = event.key



if (compChoice === userGuess) {
    win++;
}  

else if (compChoice != userGuess) {
    guessesLeft--;
}

else if (guessesLeft == 0) {
    loss++;
    guessesLeft = 10;
}

else {
    guessesLeft--;
}


document.getElementById("win").innerHTML = "Win: " + "" + win;
document.getElementById("loss").innerHTML = "Loss: " + "" + loss;
document.getElementById("guessesLeft").innerHTML = "Guesses: " + "" + guessesLeft;
document.getElementById("userGuess").innerHTML = "Your Choice: " + "" + userGuess;

};