'use strict'

$(function () {
	const self = this;
	const teamOneScore = nodecg.Replicant('teamOneScore', {defaultValue: 0});
	const teamTwoScore = nodecg.Replicant('teamTwoScore', {defaultValue: 0});
	const scoreboardShowing = nodecg.Replicant('scoreboardShowing', {defaultValue: false});
	const scoreboardType = nodecg.Replicant('scoreboardType');
	const teamOneName = nodecg.Replicant('teamOneName', {defaultValue: "Team 1"});
	const teamTwoName = nodecg.Replicant('teamTwoName', {defaultValue: "Team 2"});

	teamOneName.on('change', newVal => $('.teamOneName').html(newVal));
	teamTwoName.on('change', newVal => $('.teamTwoName').html(newVal));

	teamOneScore.on('change', newVal => $('.teamOneScore').html(newVal));
	teamTwoScore.on('change', newVal => $('.teamTwoScore').html(newVal));

	scoreboardShowing.on('change', newVal => {
		if(newVal){
			if(scoreboardType.value === "sides") {
				$('.leftSide').animate({left: 0}, 500);
				$('.rightSide').animate({right: 0}, 500);
			}else{
				$('.bottom').animate({
					width: 600 * 1.01,
					left: 600 * 0.005
				}, 500);
				$('.bottom p').animate({
					opacity: 1
				}, 500).promise().done(() => {
					$('.bottom img').animate({opacity: 1}, 500);
				});
			}
		}else{
			if(scoreboardType.value === "sides") {
				$('.leftSide').animate({left: -250}, 500);
				$('.rightSide').animate({right: -250}, 500);
			}else{
				$('.bottom img').animate({
					opacity: 0
				}, 200).promise().done(() => {
					$('.bottom p').animate({opacity: 0}, 200).promise().done(() => {
						$('.bottom').animate({
							width: 0
						}, 400);
					});
				});
			}
		}
	});
})
