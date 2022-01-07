const btn = document.getElementById("btn");
const output = document.getElementById("outputtext");

let number = [Math.floor(Math.random() * 100)]

function myFunction() {
	//btn.addEventListener("click", function(){
		let input = document.getElementById("userInput").value;
		if (input === number) {
			document.getElementById('p1').innerHTML = ` You guessed right number was ${number}`
		} else if (input < number) {
			document.getElementById('p1').innerHTML = "You guessed too low!"
		} else if (input > number) {
			document.getElementById('p1').innerHTML = "you guessed too high!"
		}
	//})
};