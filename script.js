let timesplayed = 0;
rocksclimbedwon = 0;
rocksclimbedlost = 0;
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
        gameresult = " You climbed higher!";
        rocksclimbedwon++;
    } else {
        gameresult = "That Rock is Too Hot!"
    }
    timesplayed++;
    let chance = document.getElementById('chance');
    chance.innerText = chanceresult;
    let result = document.getElementById('result');
    result.innerText = gameresult;
    let gameCount = document.getElementById('count');
    gameCount.innerText = timesplayed;
    let won = document.getElementById('wins');
    won.innerText = rocksclimbedwon;
}
function resetScore() {
    let timesplayed = 0;
    rocksclimbedwon = 0;
    rocksclimbedlost = 0;
    let gameCount = document.getElementById('count');
    let won = document.getElementById('wins')
    let lost = document.getElementById('losses')
    let rocksclimbed = document.getElementById('result');
    gameCount.innerText = timesplayed;
    won.innerText = rocksclimbedwon;
  }