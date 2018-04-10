'use strict';

function disabled(selector, value){
	$(selector).prop('disabled', value);
}

function index(newVal){
	return newVal === "sides" ? 0 : 1;
}
(function () {
	const scoreboardShowing = nodecg.Replicant('scoreboardShowing', {defaultValue: false});
	const scoreboardType = nodecg.Replicant('scoreboardType', {defaultValue: "sides"});

	scoreboardType.on('change', newVal => document.getElementById('scoreboard-listbox').select(index(newVal)));

	scoreboardShowing.on('change', newVal => {
		if (newVal) {
			disabled('#show', true);
			disabled('#hide', false);
		} else {
			disabled('#show', false);
			disabled('#hide', true);
		}
	});

	$('#show').on('click', () => scoreboardShowing.value = true);
	$('#hide').on('click', () => scoreboardShowing.value = false);

	$('#scoreboard-position').on('selected-item-changed', (event) => {
		if (event.target.selectedItem !== "") {
			let label = event.target.selectedItem.innerHTML.trim();
			scoreboardType.value = label.toLowerCase();
		}
	});
})();
