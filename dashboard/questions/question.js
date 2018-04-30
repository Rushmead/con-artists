'use strict';
(function () {
	const showQuestion = nodecg.Replicant('questionShow');
	const currentQuestion = nodecg.Replicant("currentQuestion");
	const questionPack = nodecg.Replicant("questionPack");
	$('#reload-packs').on('click', () => {
		nodecg.sendMessage('reloadPacks');
	})
	$('#showQuestion').on('click', () => {
		showQuestion.value = true;
	})

	showQuestion.on('change', newVal => {
		if(newVal){
			$('#showQuestion').prop('disabled', true);
			$('#hideQuestion').prop('disabled', false);
		}else{
			$('#showQuestion').prop('disabled', false);
			$('#hideQuestion').prop('disabled', true);
		}
	});

	$('#nextQuestion').on('click', () => {
		if(currentQuestion.value !== undefined) {
console.log(questionPack.value.questions);
console.log(questionPack.value.questions.indexOf(currentQuestion.value) + 1);
//console.log(currentQuestion.value.id);
			currentQuestion.value = questionPack.value.questions[currentQuestion.value.index + 1];
			nodecg.sendMessage('resetQuestion');
		}
	});

	$('#reset').on('click', () => {
		currentQuestion.value = questionPack.value.questions[0];
		nodecg.sendMessage('resetQuestion');
	});

	$('#hideQuestion').on('click', () => {
		showQuestion.value = false;
		nodecg.sendMessage('resetQuestion');
	})
	$('#revealAnswer').on('click', () => {
		nodecg.sendMessage('revealAnswer');
	})

	$('#playOne').on('click', () => {
		nodecg.sendMessage("soundTrack", 1);
	});
	$('#playTwo').on('click', () => {
		nodecg.sendMessage("soundTrack", 2);
	})
})()
