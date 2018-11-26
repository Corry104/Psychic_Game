//JavaScript The Psychic Game

// window.onload = function() {
//     alert("hello!");
// }

function myFunction()   {
    var pippo = 100;
    alert(pippo);
}


var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var win = 0;

var losses = 0;

var guessesLeft = 10;

var userChoice = Math.floor(Math.random()*compChoice.lenght)

