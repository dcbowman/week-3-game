<script type = "text/javascript">

document.write(Please select a letter to play);

var userGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var words = ["dundie", "scrantonicity", "schrute farms", "threat level midnight",
"here comes trebel", "prision mike", "thats what she said", "worlds best boss"];

var wins = 0
var currentword =
var guessesleft = 6
var lettersguessed =

//users keys answer to start game
document.onkeyup = function(event
	)
{ 

//Generate a random word
var randomWord = words[Math.floor(Math.random()*words.length)]
document.write(randomDay);

//letters are shown as underlines
document.write(randomWord.fill("-");

//compare users guess to the random word
function compare (userGuess, randomWord) {
{
  var  = {};
  for(var i=0;i<words.length;i++)
  {

//if the users guess is in the word, show letter, if not put letter
//under the letter guessed and reduce guesses left

//once word is complete increase wins ++ 

//start game over
