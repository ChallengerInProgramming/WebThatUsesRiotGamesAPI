const riotKey = 'api_key=RGAPI-239042c3-ff1a-4784-8d53-8d7664ee5343';

//function getValues(){
//    let url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/High%20Score?api_key=RGAPI-239042c3-ff1a-4784-8d53-8d7664ee5343"

//}



//const URL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/HighScore?api_key=RGAPI-f478804a-4e03-4d80-99f9-f3d2d3892bd8';
var URL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name';
const api_key = 'api_key=RGAPI-f478804a-4e03-4d80-99f9-f3d2d3892bd8';
// percentTwenty is put in empty spaces between names eg "Tom Kwon" would equal "Tom%20Kwon"
const percentTwenty = '%20';

//placeholder name
var summonerName = "High Score";

async function getValueFromTextBoxFunction(){
  summonerName = document.getElementById('fname').value;
  let summonerNameComplete = summonerName.replace(/ /g,percentTwenty);
  URL = URL + '/' + summonerNameComplete + '?' + api_key;
  document.getElementById("SummonerNameSearchButton").innerHTML = URL;
  console.log(URL);
  let response = await fetch(URL);
  response = await response.json()
  console.log(response);


  URL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name';
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

