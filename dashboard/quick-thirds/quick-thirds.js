(function () {
	'use strict';
	const lowerThirdBottom = nodecg.Replicant('lowerThirdBottom', {defaultValue: ""});
	const lowerThirdTop = nodecg.Replicant('lowerThirdTop', {defaultValue: ""});
	const lowerThirdWidth = nodecg.Replicant('lowerThirdWidth', {defaultValue: 100});
	const showing = nodecg.Replicant('lowerThirdShowing', {defaultValue: false});
	const hostName = nodecg.Replicant('hostName', {defaultValue: ""});
	const teamOneNames = nodecg.Replicant('teamOneNames', {defaultValue: ""});
	const teamTwoNames = nodecg.Replicant('teamTwoNames', {defaultValue: ""});
  const teamOneName = nodecg.Replicant('teamOneName', {defaultValue: "Team 1"});
  const teamTwoName = nodecg.Replicant('teamTwoName', {defaultValue: "Team 2"});
  let creditsLoop = -1;
  $('#hostQuick').on('click', () => {
    if(showing.value === true){
      showing.value = false;
      $('#hostQuick').removeClass("green");
    }else{
      lowerThirdBottom.value = "Host";
      lowerThirdTop.value = hostName.value;
      lowerThirdWidth.value = 50;
      showing.value = true;
      $('#hostQuick').addClass("green");
    }
  });
  $('#teamOneQuick').on('click', () => {
    if(showing.value === true){
      showing.value = false;
      $('#teamOneQuick').removeClass("green");
    }else{
      lowerThirdBottom.value = teamOneNames.value;
      lowerThirdTop.value = "Team " + teamOneName.value;
      lowerThirdWidth.value = 75;
      showing.value = true;
      $('#teamOneQuick').addClass("green");
    }
  })
  $('#teamTwoQuick').on('click', () => {
    if(showing.value === true){
      showing.value = false;
      $('#teamTwoQuick').removeClass("green");
    }else{
      lowerThirdBottom.value = teamTwoNames.value;
      lowerThirdTop.value = "Team " + teamTwoName.value;
      lowerThirdWidth.value = 75;
      showing.value = true;
      $('#teamTwoQuick').addClass("green");
    }
  });
  $('#creditsQuick').on('click', () => {
    if(showing.value === true){
      showing.value = false;
      $('#creditsQuick').removeClass("green");
      clearInterval(creditsLoop);
      creditsLoop = -1;
    }else{
      lowerThirdWidth.value = 50;
      let credits = nodecg.bundleConfig.credits;
      console.log(credits);
      let currentI = -1;
      creditsLoop = setInterval(() => {
        if(currentI + 1 < credits.length){
          currentI++;
          let credit = credits[currentI];
          if(credit.name.length >= 50){
              lowerThirdWidth.value = 100;
          }else if(credit.name.length <= 20){
            lowerThirdWidth.value = 50;
          }else{
            lowerThirdWidth.value = 75;
          }
          lowerThirdBottom.value = credit.name;
          lowerThirdTop.value = credit.title;
          showing.value = true;
          nodecg.sendMessage("updateLowerThird");
        }else{
          showing.value = false;
          $('#creditsQuick').removeClass("green");
          clearInterval(creditsLoop);
          creditsLoop = -1;
        }
      }, 2000);
      $('#creditsQuick').addClass("green");
    }
  })
})();
