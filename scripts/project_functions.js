const btnRoll = document.getElementById('btn_roll');
const plOneRoundScore = document.getElementById('round_score_1');
const plTwoRoundScore = document.getElementById('round_score_2');
const plOneTotalScore = document.getElementById('total_score_1');
const plTwoTotalScore = document.getElementById('total_score_2');

function playGame(){

    let player1 = new Player();
    const playerPC = new Player();
    let roundNumber = 0;
    console.log("In playGame function");
    btnRoll.addEventListener("click", startRound);

}

function startRound(){
    roundNumber++;
    player1.play();
    playerPC.play();

    plOneRoundScore.innerHTML = `${player1.showRound()}`;



}