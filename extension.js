'use strict';
const fs = require('fs');

module.exports = function (nodecg) {
const questionPacks = nodecg.Replicant('questionPacks');
fs.readFile('questions.json', 'utf8', function(err, data){
    if(err) throw err;
    console.log(data.toString());
    var questions = JSON.parse(data.toString());
    questionPacks.value = questions.questionPacks;
});

nodecg.listenFor('reloadPacks', () => {
  console.log("RELOADING");
  fs.readFile('questions.json', 'utf8', function(err, data){
      if(err) throw err;
      console.log(data.toString());
      var questions = JSON.parse(data.toString());
      questionPacks.value = questions.questionPacks;
  });
});

};
