$(document).ready(function(){

	// Generate a random number
	var random = 0;
	var wins = 0;
	var losses = 0;
	var totalScore = 0;
	var blue = 0;
	var yellow = 0;
	var red = 0;
	var green = 0;





	function resetGame(){
		random = Math.floor(Math.random() * 101) + 19;
		blue = Math.floor(Math.random() * 11) + 1;
		yellow = Math.floor(Math.random() * 11) + 1;
		red = Math.floor(Math.random() * 11) + 1;
		green = Math.floor(Math.random() * 11) + 1;
		totalScore = 0;
	}

	function updateBoard(){
		$('#numberOfWins').html(wins);
		$('#numberOfLosses').html(losses);
		$('#totalScore').html(totalScore);
		$('#randomNumber').html(random);

	}

	function changeTotalScore(toAdd){
		totalScore += toAdd;

		if(totalScore > random){
			losses += 1;
			resetGame();
		} else if (totalScore == random){
			wins += 1;
			resetGame();
		} else{

		}

		updateBoard();
	}

	resetGame();
	updateBoard();

	$("#blueCrystal").on( "click", function() {
		changeTotalScore(blue);
 	});

 	$("#redCrystal").on( "click", function() {
		changeTotalScore(red);
 	});

 	$("#yellowCrystal").on( "click", function() {
		changeTotalScore(yellow);
 	});

	$("#greenCrystal").on( "click", function() {
		changeTotalScore(green);
 	});







})