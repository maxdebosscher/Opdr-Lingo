// Global variables
var word = words[Math.floor(Math.random() * words.length)].toUpperCase(),
	letter = word.split("");
var sortedLetter = letter.slice().sort();
alert(sortedLetter);
alert(word);
var x = 1;
var y = 0;

// Draws the grid then shows the first letter of the word
function drawGrid() {
	var gameContainer = document.getElementById("container"),
		title = document.getElementById("title").style.display = "block",
		button = document.getElementById("button1").style.display = "none";
	for (var i = 0; i < 5; i++) {
		var row = document.createElement("div");
			row.className = "gridRow";
		for (var j = 1; j <= 5; j++) {
			var cellNumber = (i * 5) + j;
			var cell = document.createElement("div");
				cell.className = "gridItem";
				cell.setAttribute("id", "gridItem-" + cellNumber);
			row.appendChild(cell); 
		}
		gameContainer.appendChild(row);
		var x = i * 5 + 1;
		var gridItem = document.getElementById("gridItem-" + x);
			gridItem.innerText = letter[0];
	}
}

// Output of the user input and word checker
function userOutput() {
	var userInput = document.getElementById("userInput").value.toUpperCase();
		splitInput = userInput.split("");
	for (var i = 0; i < 5; i++) {
		var gridItem = document.getElementById("gridItem-" + x);
			gridItem.innerText = splitInput[i];
		var letterCount = letter.filter(function(x) { return x === splitInput[i]; }).length;
		var inputCount = splitInput.filter(function(x) { return x === splitInput[i]; }).length;
		x++;
		if (splitInput[i] == letter[i]) {
			gridItem.style.backgroundColor = "green";
		} else if (letter.indexOf(splitInput[i]) > -1) {
			if (inputCount > letterCount) {
				if (sortedLetter[i + 1] == sortedLetter[i]) {
					if (sortedLetter[i - 1] == sortedLetter[i]) {
        				gridItem.style.backgroundColor = "yellow";
					} else {
    					gridItem.style.backgroundColor = "red";
    				}
    			} else {
    				gridItem.style.backgroundColor = "red";
    			}
			} else {
				gridItem.style.backgroundColor = "yellow";
			}
		} else {
			gridItem.style.backgroundColor = "red";
		}
	}
	y++;
	if (userInput == word) {
		document.getElementById("input").style.display = "none";
		alert("Win");
	} else if (y == 5) {
		document.getElementById("input").style.display = "none";
		alert("Fail");
	}
}