const btn = document.getElementById("btn");
const output = document.getElementById("outputtext");

const number = [Math.floor(Math.random() * 100)]

function myFunction(e) {
	//btn.addEventListener("click", function(){
		e.preventDefault();
		const input = document.getElementById("userInput").value;
		if (input === number) {
			document.getElementById('p1').innerHTML = ` You guessed right number was ${number}`
		} else if (input < number) {
			document.getElementById('p1').innerHTML = "You guessed too low!"
		} else if (input > number) {
			document.getElementById('p1').innerHTML = "you guessed too high!"
		}
	//})
};