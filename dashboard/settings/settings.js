'use strict';

(function () {
	const teamOneName = nodecg.Replicant('teamOneName', {defaultValue: "Team 1"});
	const teamTwoName = nodecg.Replicant('teamTwoName', {defaultValue: "Team 2"});
	const hostName = nodecg.Replicant('hostName', {defaultValue: ""});
	const teamOneNames = nodecg.Replicant('teamOneNames', {defaultValue: ""});
	const teamTwoNames = nodecg.Replicant('teamTwoNames', {defaultValue: ""});

	teamOneName.on('change', newVal => $('#teamOneName').val(newVal));
	teamTwoName.on('change', newVal => $('#teamTwoName').val(newVal));
	hostName.on('change', newVal => $('#hostName').val(newVal));
	teamOneNames.on('change', newVal => $('#teamOneNames').val(newVal));
	teamTwoNames.on('change', newVal => $('#teamTwoNames').val(newVal));


	$('#save').on('click', () => {
		teamOneName.value = $('#teamOneName').val();
		teamTwoName.value = $('#teamTwoName').val();
		hostName.value = $('#hostName').val();
		teamOneNames.value = $('#teamOneNames').val();
		teamTwoNames.value = $('#teamTwoNames').val();
	});

})();
