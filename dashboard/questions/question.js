'use strict';
(function () {
  const showQuestion  = nodecg.Replicant('questionShow');
$('#reload-packs').on('click', () => {
  nodecg.sendMessage("reloadPacks");
});
$('#showQuestion').on('click', () => {
  showQuestion.value = true;

});

$('#hideQuestion').on('click', () => {
  showQuestion.value = false;
});
$('#revealAnswer').on('click', () => {
  nodecg.sendMessage("revealAnswer");
});
})();
