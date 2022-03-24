const riotKey = 'api_key=RGAPI-239042c3-ff1a-4784-8d53-8d7664ee5343';

//function getValues(){
//    let url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/High%20Score?api_key=RGAPI-239042c3-ff1a-4784-8d53-8d7664ee5343"

//}
//testing
const URL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/HighScore?api_key=RGAPI-239042c3-ff1a-4784-8d53-8d7664ee5343';


function nameFunction(){

    fetch(URL)
    .then(res => res.text())
    .then(text => {
    console.log(text);
  })
   .catch(err => console.log(err));

   var nameValue = document.getElementById('fname').value;
   document.getElementById("SummonerNameSearchButton").innerHTML = "hi";
   //document.getElementById("SummonerNameSearchButton").innerHTML = nameValue;
}

