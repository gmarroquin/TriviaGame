//runs as soon as the page loads
window.onload = function() {
	$("#start").on("click", timer.start);
};

var intervalId;
var clockRunning = false;

//timer
var timer = {

	time: 0,
	start: function() {

//sets the speed of the countdown by one second
if (!clockRunning) {
	intervalId = setInterval(timer.count, 1000);
	clockRunning = true;
}
},

count: function() {
// count down by 1
timer.time--;

var converted = timer.timeConverter(timer.time);
console.log(converted);

//displays time in the footer of main section timeLeft
$("#timeLeft").html(converted);
},
timeConverter: function(t) {

	var minutes = Math.floor(t / 60);
	var seconds = t - (minutes * 60);

	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	if (minutes === 10) {
		minutes = "00";
	}
	else if (minutes < 10) {
		minutes = "00" + minutes;
	}
	return minutes + ":" + seconds;
}

};

//If Yes button is pressed 
	$("#answerOne").on("click", function() {
		alert("Doing it right!")
});

//then add points in favor

//continue to next question 

//If No button is pressed 

//then add points to losses 

//continue to next question 









