'use strict';

(function () {
	const teamOneName = nodecg.Replicant('teamOneName', {defaultValue: "Team 1"});
	const teamTwoName = nodecg.Replicant('teamTwoName', {defaultValue: "Team 2"});

	teamOneName.on('change', newVal => $('#teamOneName').val(newVal));
	teamTwoName.on('change', newVal => $('#teamTwoName').val(newVal));


	$('#save').on('click', () => {
		teamOneName.value = $('#teamOneName').val();
		teamTwoName.value = $('#teamTwoName').val();
	});

})();
