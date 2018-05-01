'use strict';

function loadQuestions(data){
  var questions = data;
questions.questionPacks.map((questionPack, index) => {
    questionPack.questions = questionPack.questions.map((question, qindex) => {
      question['index'] = qindex;
      return question;
  });
  questionPack.id = index;
  return questionPack;
});
return questions;
}

module.exports = function (nodecg) {
const questionPacks = nodecg.Replicant('questionPacks');
    questionPacks.value = loadQuestions(nodecg.bundleConfig.questions).questionPacks;

nodecg.listenFor('reloadPacks', () => {
  console.log("RELOADING");
  questionPacks.value = loadQuestions(nodecg.bundleConfig.questions).questionPacks;
});

};
