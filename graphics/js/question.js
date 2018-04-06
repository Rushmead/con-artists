'use strict';

$(function () {
	const currentQuestion = nodecg.Replicant("currentQuestion");
	const questionShow = nodecg.Replicant('questionShow');

	nodecg.listenFor('selectedAnswer', (selected) => {
		currentQuestion.value.answers.forEach((answer, index) => {
			index++;
				if(answer === selected){
					console.log(index);
					$('#answer' + index).parent().addClass('selected');
				}
		});
	});

	nodecg.listenFor('revealAnswer', () => {
		currentQuestion.value.answers.forEach((answer, index) => {
			console.log(index);
				if(index === currentQuestion.value.correctAnswer){
					$('#answer' + (index + 1)).parent().addClass('correct');
				}
		});
	});


	questionShow.on('change', newVal => {
		$('#questionQ').text(currentQuestion.value.question);
		currentQuestion.value.answers.forEach((answer, index) => {
			index++;
			$('#answer' + index).text(answer);
		});
		if(newVal){
			var amount = 1900 * (75/ 100);
			$('.lower-third-container').animate({
				width: amount*1.01,
				left: amount*0.005
			},500);

				$('.lower-third-top').animate({
					opacity: 1
				},200);
				$('.lower-third-bottom').animate({
					opacity: 1
				},200);
		}else{
		$('.lower-third-top').animate({
			opacity: 0
		},200);
		$('.lower-third-bottom').animate({
			opacity: 0
		},200);
			$('.lower-third-container').animate({width: "0"}, {duration: 500});
		}
	});
});
