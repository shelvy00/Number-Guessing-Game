const btn = document.getElementById("btn");
const output = document.getElementById("outputtext");

const number = Math.floor(Math.random() * 100)

let count = 0;
const numOfGuess = 3


function myFunction(e) {
	//btn.addEventListener("click", function(){
		e.preventDefault();
		const input = document.getElementById("userInput").value;
		if (input === number && count < numOfGuess) {
			document.getElementById('p1').innerHTML = ` You guessed right number was ${number}`
		} else if (input < number && count < numOfGuess) {
			document.getElementById('p1').innerHTML = "You guessed too low!"
			count++
		} else if (input > number && count < numOfGuess) {
			document.getElementById('p1').innerHTML = "you guessed too high!"
			count++
		} else if (count === numOfGuess) {
			document.getElementById('p1').innerHTML = "Too many guesses, Game Over"
			count*0 // I made count*0 to restart the game without the user refreshing the page
		}
	//})
};