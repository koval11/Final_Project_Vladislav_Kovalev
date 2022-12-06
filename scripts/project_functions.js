const btnRoll = document.getElementById('btn_roll');
const plOneRoundScore = document.getElementById('round_score_1');
const plTwoRoundScore = document.getElementById('round_score_2');
const plOneTotalScore = document.getElementById('total_score_1');
const plTwoTotalScore = document.getElementById('total_score_2');
const diceOneImg = document.getElementById('dice_one');
const diceTwoImg = document.getElementById('dice_two');
const diceThreeImg = document.getElementById('dice_three');
const diceFourImg = document.getElementById('dice_four');
const popup = document.getElementById('pop-up'); 
const closeButton = document.getElementById("close-pop-up");
const jedi = document.getElementById("jedi");
const sith = document.getElementById("sith");
const userName = document.getElementById("name");
const form = document.getElementById("the_form");
const submit = document.getElementById("submit");
const spanOne = document.getElementById("span_1");
const playerH3 = document.getElementById("player_h3");
const aiH3 = document.getElementById("ai_h3");
const wrapper = document.getElementById("wrapper");


let roundNumber;
let player1;
let playerPC;
let side = "Jedi";

function playGame(){

    popup.style.display = "block";

    jedi.addEventListener("click", function(){
        jedi.checked = true;
        spanOne.innerHTML = `Jedi`;
        side = "Jedi";

    });
    sith.addEventListener("click", function(){
        sith.checked = true;
        spanOne.innerHTML = `Sith`;
        side = "Sith";
    });

    userName.addEventListener("change", function(){
        submit.value = "Play";
       
    });

    // submit.addEventListener("click", function(){
    //     submit.preventDefault();
    //     popup.style.display = "none";
    // });

    form.addEventListener("submit", validateForm);

    function validateForm(event){
        let formDataErrorsDetected = false;


        if(userName.value.trim().length === 0){
		
            userName.style.backgroundColor = "red";
            
            formDataErrorsDetected = true;
        }


        if( formDataErrorsDetected === true){
            event.preventDefault();		
        }else{
            event.preventDefault();
            if(side == "Jedi"){
                document.body.style.backgroundImage = "url('images/background_jedi.jpg')";
                wrapper.style.backgroundImage = "linear-gradient(to right, rgb(19, 71, 245, 0.95), rgb(191, 3, 3, 0.95))";
                playerH3.innerHTML = `Jedi Knight ${userName.value}`;
                aiH3.innerHTML = `Darth AI`;
        
            }else{
                document.body.style.backgroundImage = "url('images/background_sith.jpg')";
                wrapper.style.backgroundImage = "linear-gradient(to right, rgb(191, 3, 3, 0.95), rgb(19, 71, 245, 0.95))";
                playerH3.innerHTML = `Darth ${userName.value}`;
                aiH3.innerHTML = `Jedi Knight AI`;
            }
            popup.style.display = "none";
        }
        
    
    }

    



    roundNumber = 0;
    player1 = new Player();
    playerPC = new Player();


    plOneRoundScore.innerHTML = `Round: `;
    plOneTotalScore.innerHTML = `Total: `;

    plTwoRoundScore.innerHTML = `Round: `;
    plTwoTotalScore.innerHTML = `Total: `;

    diceOneImg.src = `images/dice/1.png`;
    diceTwoImg.src = `images/dice/1.png`;
    diceThreeImg.src = `images/dice/1.png`;
    diceFourImg.src = `images/dice/1.png`;

    console.log("In playGame function");

    btnRoll.disabled = false;
    btnRoll.addEventListener("click", startRound);

}

function startRound(){
    console.log("In starround function");

    roundNumber++;
    player1.play();
    playerPC.play();

    plOneRoundScore.innerHTML = `Round: ${player1.showRound()}`;
    plOneTotalScore.innerHTML = `Total: ${player1.showTotal()}`;

    plTwoRoundScore.innerHTML = `Round: ${playerPC.showRound()}`;
    plTwoTotalScore.innerHTML = `Total: ${playerPC.showTotal()}`;

    diceOneImg.src = `images/dice/${player1.showDiceOne()}.png`;
    diceTwoImg.src = `images/dice/${player1.showDiceTwo()}.png`;
    diceThreeImg.src = `images/dice/${playerPC.showDiceOne()}.png`;
    diceFourImg.src = `images/dice/${playerPC.showDiceTwo()}.png`;
      
    if(roundNumber >= 3){
        btnRoll.disabled = true;
    }


}