'use strict'

$(function () {
	const self = this;
	const teamOneScore = nodecg.Replicant('teamOneScore', {defaultValue: 0});
	const teamTwoScore = nodecg.Replicant('teamTwoScore', {defaultValue: 0});
	const messages = nodecg.Replicant('messages');
	const currentQuestion = nodecg.Replicant('currentQuestion');
	let selectedAnswer;

	nodecg.listenFor('selectedAnswer', (selected) => {
		currentQuestion.value.answers.forEach((answer, index) => {
			index++
			if (answer === selected) {
				selectedAnswer = selected
				$('#answer' + index).parent().addClass('selected')
			}
		})
	})

	nodecg.listenFor('resetQuestion', () => {
		currentQuestion.value.answers.forEach((answer, index) => {
			$('#answer' + (index + 1)).parent().removeClass();
		})
	});

	nodecg.listenFor('revealAnswer', () => {
		currentQuestion.value.answers.forEach((answer, index) => {
			if (answer === currentQuestion.value.correctAnswer) {
				$('#answer' + (index + 1)).parent().addClass('correct')
			} else if (answer === selectedAnswer) {
				$('#answer' + (index + 1)).parent().addClass('wrong')
			}
		})
	})

	messages.on('change', newVal => $('#messages').html(newVal.map((message) => {return "<li>" + message + "</li>"})));

	teamOneScore.on('change', newVal => $('.teamOneScore').html(newVal));
	teamTwoScore.on('change', newVal => $('.teamTwoScore').html(newVal));

	const teamOneName = nodecg.Replicant('teamOneName', {defaultValue: "Team 1"});
	const teamTwoName = nodecg.Replicant('teamTwoName', {defaultValue: "Team 2"});

	teamOneName.on('change', newVal => $('.teamOneName').html(newVal));
	teamTwoName.on('change', newVal => $('.teamTwoName').html(newVal));

	currentQuestion.on('change', newVal => {
		$('#questionQ').text(newVal.question)
		newVal.answers.forEach((answer, index) => {
			index++
			$('#answer' + index).text(answer)
		})
	});
})
