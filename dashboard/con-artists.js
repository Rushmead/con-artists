(function () {
	'use strict';

	const show = document.getElementById('show');
	const hide = document.getElementById('hide');
	const teamOneScore = nodecg.Replicant('teamOneScore', {defaultValue: "0"});
	const teamTwoScore = nodecg.Replicant('teamTwoScore', {defaultValue: "0"});
	const showing = nodecg.Replicant('interviewShowing', {defaultValue: false});
	document.getElementById('teamTwoScore').value = teamTwoScore.value;
	document.getElementById('teamOneScore').value = teamOneScore.value;

	show.addEventListener('click', () => {
		takeNames();
		showing.value = true;
	});

	hide.addEventListener('click', () => {
		showing.value = false;
	});

	showing.on('change', newVal => {
		if (newVal) {
			show.setAttribute('disabled', 'true');
			hide.removeAttribute('disabled');
		} else {
			show.removeAttribute('disabled');
			hide.setAttribute('disabled', 'true');
		}
	});

	function takeNames() {
		teamTwoScore.value = document.getElementById('teamTwoScore').value;
		teamOneScore.value = document.getElementById('teamOneScore').value;
	}
})();
