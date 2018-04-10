'use strict';

$(function () {
	$('#teamOneChoose').on('click', () => {
		$('.teamchooser').addClass("hidden");
		$('#teamOneBuzzer').removeClass("hidden");
	});
	$('#teamTwoChoose').on('click', () => {
		$('.teamchooser').addClass("hidden");
		$('#teamTwoBuzzer').removeClass("hidden");
	});

	$('#teamTwoBuzzer').on('click', () => {
		nodecg.sendMessage("buzz", "two");
		$('#teamTwoBuzzer').attr('disabled', "disabled");
		setTimeout(() => {$('#teamTwoBuzzer').removeAttr('disabled')}, 1000 * 2);
	});
	$('#teamOneBuzzer').on('click', () => {
		nodecg.sendMessage("buzz", "one");
		$('#teamOneBuzzer').attr('disabled', "disabled");
		setTimeout(() => {$('#teamOneBuzzer').removeAttr('disabled')}, 1000 * 2);
	});
});
