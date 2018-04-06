(function () {
	'use strict';

	const show = document.getElementById('showLowerThird');
	const hide = document.getElementById('hideLowerThird');
	const update = document.getElementById('updateLowerThird');
	const lowerThirdWidth = nodecg.Replicant('lowerThirdWidth', {defaultValue: 100});
	const lowerThirdBottom = nodecg.Replicant('lowerThirdBottom', {defaultValue: ""});
	const lowerThirdTop = nodecg.Replicant('lowerThirdTop', {defaultValue: ""});
	const showing = nodecg.Replicant('lowerThirdShowing', {defaultValue: false});


	lowerThirdBottom.on('change', (newVal) => {
		document.getElementById("lower-third-bottom").value = newVal;
	});
	lowerThirdTop.on('change', (newVal) => {
		document.getElementById("lower-third-top").value = newVal;
	});

	// document.getElementById("lower-third-width").value = lowerThirdWidth.value;
	show.addEventListener('click', () => {
		var label =document.getElementById("lower-third-width").selectedItemLabel;
		switch(label){
			case "Half":
				lowerThirdWidth.value = 50;
			break;
			case "Full":
				lowerThirdWidth.value = 100;
			break;
			case "Three Quarters":
				lowerThirdWidth.value = 75;
			break;
		}
		showing.value = true;
	});

	hide.addEventListener('click', () => {
		showing.value = false;
	});

	update.addEventListener('click', () => {
		lowerThirdBottom.value = document.getElementById("lower-third-bottom").value;
		lowerThirdTop.value = document.getElementById("lower-third-top").value;
		nodecg.sendMessage("updateLowerThird");
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
})();
