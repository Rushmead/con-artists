'use strict';

$(function () {
	const lowerThirdBottom = nodecg.Replicant('lowerThirdBottom');
	const lowerThirdTop = nodecg.Replicant('lowerThirdTop');
	const showing = nodecg.Replicant('lowerThirdShowing');
	const width = nodecg.Replicant('lowerThirdWidth', {defaultValue: 0});

	nodecg.listenFor('updateLowerThird', () => {
		var amount = 1900 * (width.value / 100);
		$('.lower-third-container').animate({width:amount}, {duration: 800});
		$('.lower-third-bottom').text(lowerThirdBottom.value);
		$('.lower-third-top').text(lowerThirdTop.value);
	});


	showing.on('change', newVal => {
		$('.lower-third-top').text(lowerThirdTop.value);
		$('.lower-third-bottom').text(lowerThirdBottom.value);
		if(newVal){
			var amount = 1900 * (width.value / 100);
			$('.logo-container').animate({opacity:1}, {duration: 400});
			$('.lower-third-container').animate({width:amount}, {duration: 800});
		}else{
			$('.lower-third-container').animate({width: "0"}, {duration: 800});
			$('.logo-container').animate({opacity:0}, {duration: 400});
		}
	});
});
