'use strict';

(function () {
	const messages = nodecg.Replicant('messages', {defaultValue: [], persistent: false});

	messages.on('change', newVal => $('#messages').html(newVal.map((message) => {return "<li>" + message + "</li>"})));

	$('#send').on('click', () => {
		let messageArray = messages.value;
		if(!Array.isArray(messageArray)){
			messageArray = [];
		}
		messageArray.unshift($('#message').val());
		messages.value = messageArray;
		$('#message').val("");
	});
	$('#clear').on('click', () => {
		messages.value = [];
	})

})();
