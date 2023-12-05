let timesplayed = 0;
let  timeswon = 0;
let timeslost = 0;
function run(x) {
    let choiceresult = x;
    let randNum = Math.floor(Math.random() * 2) + 1;
    let chanceresult;
    if (randNum === 1) {
        chanceresult = 'Rock 1'
    } else {
        chanceresult = 'Rock 2'
    }
    let gameresult;
    if (chanceresult === choiceresult){
        gameResult = "win";
        rocksclimbed++;
    } else {
        gameResult = "loss"
        rocksclimbed--;
    }
    gamesplayed++;
    let prediction = document.getElementById('prediction');
    prediction.innerText = chanceresult;
    let result = document.getElementById('result');
    result.innerText = flipresult;
    let gameCount = document.getElementById('count');
    gameCount.innerText = gamesPlayed;
    let rocksclimbed = document.getElementById('result');
}
function resetScore() {
    gamesPlayed = 0;
    rocksclimbed = 0;
    let gameCount = document.getElementById('count');
    let rocksclimbed = document.getElementById('result');
    gameCount.innerText = gamesPlayed;
    winCount.innerText = gamesWon;
    lossCount.innerText = gamesLost;
  }