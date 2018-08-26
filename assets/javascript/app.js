var startGame = false;
var score = 0;



var questions = [
	{
		"questions": "This is the first question!",
		"option1": "answer1",
		"option2": "answer2",
		"option3": "answer3",
		"option4": "answer4",
		"answer": "2"

	},
	{
		"questions": "This is the second question!",
		"option1": "answer1",
		"option2": "answer2",
		"option3": "answer3",
		"option4": "answer4",
		"answer": "2"
	},
	{
		"questions": "This is the third question!",
		"option1": "answer1",
		"option2": "answer2",
		"option3": "answer3",
		"option4": "answer4",
		"answer": "2"
	},
	{
		"questions": "This is the fourth question!",
		"option1": "answer1",
		"option2": "answer2",
		"option3": "answer3",
		"option4": "answer4",
		"answer": "2"
	}];


var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");

$(".opt1").text("HELLOW");



// function questionTable (questionIndex) {
// 	var q = questions(questionTable);
// 	questions.textContent = (questionIndex + 1) + ". " + q.question;
// 	opt1.textContent = q.opt1;
// 	opt2.textContent = q.opt2;
// 	opt3.textContent = q.opt3;
// 	opt4.textContent = q.opt4;

// };


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

			for (var i = 0; i < questions.length; i++) {

				if (timer === 15) {
					$("#questions").text(questions[0]);

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
		}
	})

});