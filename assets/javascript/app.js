var startGame = false;
var score = 0;
var count = 0;
var answers;


var questions = [
	{
		question: "This is the first question!",
		options: ["a", "b", "c", "d"],
		answer: "a"
	},
	{
		question: "This is the second question!",
		options: ["a", "b", "c", "d"],
		answer: "a"
	},
];





$(document).ready(function () {
	alert("Press START to play!")
	
	$("#start-game-button").on("click", function () {
		startGame = true;
		
		var timer = 16;
		var intervalId = setInterval(clock, 1000);
		
		function clock() {
			timer--;
			console.log("00:" + timer);
			$(".timer").text("00:" + timer);
				


				if (timer > 15) {
					$("#questions").html(questions[0]);
				}
		
				if (timer < 10 && timer > 0) {
					$(".timer").text("00:0" + timer);
				}
		
				else if (timer === 0) {
					$(".timer").text("Times Up!");
					console.log("Times Up!");
					timer = 16;
				}
		}
		function buttonOptions() {
			for (var i = 0; i < 4; i++) {
				var optionButton = $("<button>");
				optionButton.attr(questions[count].options)
				$(".options").append(optionButton);
			}

		}

	})

});