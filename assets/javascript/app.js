



var timer = 15;

var intervalId = setInterval(fiveSeconds, 1000);

function fiveSeconds() {
	timer--;
	$(".timer").text(timer);
	console.log(timer);


	if(timer === 0) {
		clearInterval(intervalId);
	}

	else {
	}
}
