'use strict'

$(function () {
	const self = this
	const currentQuestion = nodecg.Replicant('currentQuestion')
	const questionShow = nodecg.Replicant('questionShow')
	let selectedAnswer

	nodecg.listenFor('selectedAnswer', (selected) => {
		currentQuestion.value.answers.forEach((answer, index) => {
			index++
			if (answer === selected) {
				selectedAnswer = selected
				$('#answer' + index).parent().addClass('selected')
				nodecg.playSound('lockin')
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
		if (selectedAnswer === currentQuestion.value.correctAnswer) {
			nodecg.playSound('correct')
		} else {
			nodecg.playSound('incorrect')
		}
	})

	nodecg.listenFor('playSound', (sound) => {
		nodecg.playSound(sound);
	})

	nodecg.listenFor('stopALL', () => {
		nodecg.stopAllSounds();
	});

	nodecg.listenFor('soundTrack', (set) => {
		if(set === 1){
			nodecg.playSound("firstSet");
		}else{
			nodecg.playSound("secondSet");
		}
	})

	nodecg.listenFor('buzz', (team) => {
		if(team === "one"){
			nodecg.playSound("teamOneBuzz");
		}else {
			nodecg.playSound("teamTwoBuzz");
		}
	})

	currentQuestion.on('change', newVal => {
		$('#questionQ').text(newVal.question)
		newVal.answers.forEach((answer, index) => {
			index++
			$('#answer' + index).text(answer)
		})
	});

	questionShow.on('change', newVal => {
		if (newVal) {
			let amount = 1900 * (75 / 100)
			$('.lower-third-container').animate({
				width: amount * 1.01,
				left: amount * 0.005
			}, 500).promise().done(() => {
				$('.lower-third-top').animate({
					opacity: 1
				}, 200)
				$('.lower-third-bottom').animate({
					opacity: 1
				}, 200)
			})

		} else {
			$('.lower-third-top').animate({
				opacity: 0
			}, 200)
			$('.lower-third-bottom').animate({
				opacity: 0
			}, 200)
			$('.lower-third-container').animate({width: '0'}, {duration: 500}).promise().done(() => {
				for (let i = 0; i < 4; i++) {
					$('#answer' + (i + 1)).parent().removeClass();
				}
			});
		}
	})
})
