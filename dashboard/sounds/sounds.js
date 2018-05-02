(function () {
	'use strict';
  $('#playFirst').on('click', () => {
    nodecg.sendMessage("soundTrack", 1);
  });
  $('#playSecond').on('click', () => {
    nodecg.sendMessage("soundTrack", 2);
  })
  $('#playCorrect').on('click', () => {
    nodecg.sendMessage("playSound", "correct");
  });
  $('#playIncorrect').on('click', () => {
    nodecg.sendMessage("playSound", "incorrect");
  })
	$('#stopAll').on('click', () => {
    nodecg.sendMessage("stopALL");
	});
	$('#playTest').on('click', () => {
		nodecg.sendMessage("playSound", "testSet")
	})
})();
