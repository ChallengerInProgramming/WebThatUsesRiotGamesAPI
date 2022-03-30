// IDEAS: Get cs lead over oponent. Get death count. Get damage difference between oponent. Get gank amount compared to opnnent. 
// Idea seems to be focus on the important differences between yourself and your oponent.
// Idea is basically like other sites like OPGG or Mobalytics except focus entierley on yourself and the person playign the same role on the other side.

// TODO: get the opposing laners name

var SummonerURL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/';
var MatchURL = 'https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/';
var MatchDetailsURL = 'https://americas.api.riotgames.com/lol/match/v5/matches/'

const api_key = 'api_key=RGAPI-7253c065-424a-44a0-a97e-65559ffe67cd';
// percentTwenty is put in empty spaces between names eg "Tom Kwon" would equal "Tom%20Kwon"
const percentTwenty = '%20';

//placeholder name
var summonerNameVariable = "High Score";

async function getValueFromTextBoxFunction(){
  summonerNameVariable = document.getElementById('fname').value;
  let summonerNameComplete = summonerNameVariable.replace(/ /g,percentTwenty);
  SummonerURL = SummonerURL + summonerNameComplete + '?' + api_key;
  // document.getElementById("SummonerNameSearchButton").innerHTML = URL;
  //console.log(SummonerURL);
  let response = await fetch(SummonerURL);
  response = await response.json()
  //document.getElementById("SummonerNameSearchButton").innerHTML = 'puuid = ' + response.puuid;
  //console.log(response);

  // this next part will put the puuid and get match ids. Currently it will get only the previous one
  //https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/aWMgztnpk0uVYRZ_CaPPNS92Y7N6mutpGVyR8O-o_wso0fudWeY6n4KW7ds8n0MWIjiec0MA9eK3qg/ids?start=0&count=20&api_key=RGAPI-f478804a-4e03-4d80-99f9-f3d2d3892bd8
  MatchURL = MatchURL + response.puuid + '/' + 'ids?start=0&count=20&' + api_key;
  //document.getElementById("SummonerNameSearchButton").innerHTML = 'matches = ' + MatchURL;
  let responseMatch = await fetch(MatchURL);
  responseMatch = await responseMatch.json()
  //document.getElementById("SummonerNameSearchButton").innerHTML = 'MatchID = ' + responseMatch[0];

  // this part will match the matchID with details of the game (see what I did there? MATCH THE MATCHID? :D)
  MatchDetailsURL = MatchDetailsURL + responseMatch[0] + '?' + api_key;
  let responseMatchDetailsURL = await fetch(MatchDetailsURL);
  responseMatchDetailsURL = await responseMatchDetailsURL.json()
  //document.getElementById("SummonerNameSearchButton").innerHTML = 'Bounty Level = ' + responseMatchDetailsURL.info.participants[1].bountyLevel;
  //document.getElementById("SummonerNameSearchButton").innerHTML = responseMatchDetailsURL.info.participants.length;
  var participantNumber = 0;
  var lane = "hi";
  //document.getElementById("SummonerNameSearchButton").innerHTML = responseMatchDetailsURL.info.participants[1].participantId;
  for(let i = 0; i < responseMatchDetailsURL.info.participants.length; i++)
  {
     if(responseMatchDetailsURL.info.participants[i].summonerName == summonerNameVariable)
     {
       participantNumber = responseMatchDetailsURL.info.participants[i].participantId;
       lane = responseMatchDetailsURL.info.participants[i].lane;
     } 
  }

  var EnemyParticipantNumber = 0;
  if(participantNumber == 1){
    EnemyParticipantNumber = 6;
  }
  else if(participantNumber == 2){
    EnemyParticipantNumber = 7;
  }
  else if(participantNumber == 3){
    EnemyParticipantNumber = 8;
  }
  else if(participantNumber == 4){
    EnemyParticipantNumber = 9;
  }
  else if(participantNumber == 5){
    EnemyParticipantNumber = 10;
  }
  else if(participantNumber == 6){
    EnemyParticipantNumber = 1;
  }
  else if(participantNumber == 7){
    EnemyParticipantNumber = 2;
  }
  else if(participantNumber == 8){
    EnemyParticipantNumber = 3;
  }
  else if(participantNumber == 9){
    EnemyParticipantNumber = 4;
  }
  else if(participantNumber == 10){
    EnemyParticipantNumber = 5;
  }

  EnemySummonerName = responseMatchDetailsURL.info.participants[EnemyParticipantNumber - 1].summonerName;
  

  document.getElementById("SummonerNameSearchButton").innerHTML = summonerNameVariable + "<br/> <br/>" 
  + EnemySummonerName;

  // this is to reset the URL so that it does not continually add information and get longer and longer
  SummonerURL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name';
}
