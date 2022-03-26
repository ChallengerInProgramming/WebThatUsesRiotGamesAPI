// IDEAS: Get cs lead over oponent. Get death count. Get damage difference between oponent. Get gank amount compared to opnnent. 
// Idea seems to be focus on the important differences between yourself and your oponent.
// Idea is basically like other sites like OPGG or Mobalytics except focus entierley on yourself and the person playign the same role on the other side.

var SummonerURL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name';
var MatchURL = 'https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/';
var MatchDetailsURL = 'https://americas.api.riotgames.com/lol/match/v5/matches/'

const api_key = 'api_key=RGAPI-0dcab893-2a72-49f2-a18b-82b80b9bb0de';
// percentTwenty is put in empty spaces between names eg "Tom Kwon" would equal "Tom%20Kwon"
const percentTwenty = '%20';

//placeholder name
var summonerName = "High Score";

async function getValueFromTextBoxFunction(){
  summonerName = document.getElementById('fname').value;
  let summonerNameComplete = summonerName.replace(/ /g,percentTwenty);
  SummonerURL = SummonerURL + '/' + summonerNameComplete + '?' + api_key;
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
  //document.getElementById("SummonerNameSearchButton").innerHTML = 'Bounty Level = ' + responseMatchDetailsURL.info.participants[0].bountyLevel;

  // this is to reset the URL so that it does not continually add information and get longer and longer
  SummonerURL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name';
}

// function nameFunction(){

//     fetch(URL)
//     .then(res => res.text())
//     .then(text => {
//     console.log(text);
//   })
//    .catch(err => console.log(err));

//    var nameValue = document.getElementById('fname').value;
//    document.getElementById("SummonerNameSearchButton").innerHTML = "hi";
//    //document.getElementById("SummonerNameSearchButton").innerHTML = nameValue;
// }

