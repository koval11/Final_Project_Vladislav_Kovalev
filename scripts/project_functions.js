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
const popupTwo = document.getElementById('pop-up_2'); 
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
const roundH2 = document.getElementById("round_h2");
const roundH3 = document.getElementById("round_h3");
const roundImg = document.getElementById("round_img");
const closePop = document.getElementById("close-pop-up");
const playerArticle = document.getElementById("player_article");
const pcArticle = document.getElementById("pc_article");
let spanColorOne = document.getElementById("color1");
let spanColorTwo = document.getElementById("color2");
let footeId = document.getElementById("footer_id");

let Animation;
let TimeoutOne;
let TimeoutTwo;
let flagOne = false;


let roundNumber;
let player1;
let playerPC;
let side = "Jedi";
let TimeoutPop;
let TimeoutFinal;
const interval = 10;
const incrementer = 10;



function playGame(){

    
    roundNumber = 0;
    flagOne = false;


    
   

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
                wrapper.style.backgroundImage = "linear-gradient(to right, rgb(19, 71, 245, 0.6), rgb(191, 3, 3, 0.6))";
                playerArticle.style.backgroundColor= "rgba(0, 0, 0, 0.4)";
                playerArticle.style.color = "white";
                playerArticle.style.border = "white solid 3px";
                pcArticle.style.backgroundColor= "rgba(0, 0, 0, 0.4)";
                pcArticle.style.color = "red";
                pcArticle.style.border = "red solid 3px";
                footeId.style.backgroundImage = "linear-gradient(to right, rgb(19, 71, 245), rgb(191, 3, 3))";
                playerH3.innerHTML = `Jedi Knight ${userName.value}`;
                aiH3.innerHTML = `Darth AI`;
                diceOneImg.src = `images/dice/jedi/1.png`;
                diceTwoImg.src = `images/dice/jedi/1.png`;
                diceThreeImg.src = `images/dice/sith/1.png`;
                diceFourImg.src = `images/dice/sith/1.png`;
                player1 = new Player("Jedi Knight", userName.value);
                playerPC = new Player("Darth", "AI");
        
            }else{
                document.body.style.backgroundImage = "url('images/background_sith.jpg')";
                wrapper.style.backgroundImage = "linear-gradient(to right, rgb(191, 3, 3, 0.6), rgb(19, 71, 245, 0.6))";
                playerArticle.style.backgroundColor= "rgba(0, 0, 0, 0.4)";
                playerArticle.style.color = "red";
                playerArticle.style.border = "red solid 3px";
                pcArticle.style.backgroundColor= "rgba(0, 0, 0, 0.4)";
                pcArticle.style.color = "white";
                pcArticle.style.border = "white solid 3px";
                footeId.style.backgroundImage = "linear-gradient(to right, rgb(191, 3, 3), rgb(19, 71, 245))";
                playerH3.innerHTML = `Darth ${userName.value}`;
                aiH3.innerHTML = `Jedi Knight AI`;
                diceOneImg.src = `images/dice/sith/1.png`;
                diceTwoImg.src = `images/dice/sith/1.png`;
                diceThreeImg.src = `images/dice/jedi/1.png`;
                diceFourImg.src = `images/dice/jedi/1.png`;
                player1 = new Player("Darth", userName.value);
                playerPC = new Player("Jedi Knight", "AI");
            }
            popup.style.display = "none";
        }
        
    
    }


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

    
    player1.play();
    playerPC.play();

    let counter = 0;
    let countRolls = 1;

    roundNumber++;

    Animation = requestAnimationFrame(function(){TimeoutOne = setTimeout(diceRoll, 85)});
   
    function diceRoll(){

        if(countRolls == 6){

            countRolls = 1;

            if(player1.showSide() != "Darth"){
                
                diceOneImg.src = `images/dice/jedi/${countRolls}.png`;
                diceTwoImg.src = `images/dice/jedi/${countRolls}.png`;
                diceThreeImg.src = `images/dice/sith/${countRolls}.png`;
                diceFourImg.src = `images/dice/sith/${countRolls}.png`;

            }else{

                diceOneImg.src = `images/dice/sith/${countRolls}.png`;
                diceTwoImg.src = `images/dice/sith/${countRolls}.png`;
                diceThreeImg.src = `images/dice/jedi/${countRolls}.png`;
                diceFourImg.src = `images/dice/jedi/${countRolls}.png`;

            }

        }else{

            countRolls++;

            if(player1.showSide() != "Darth"){
                
                diceOneImg.src = `images/dice/jedi/${countRolls}.png`;
                diceTwoImg.src = `images/dice/jedi/${countRolls}.png`;
                diceThreeImg.src = `images/dice/sith/${countRolls}.png`;
                diceFourImg.src = `images/dice/sith/${countRolls}.png`;

            }else{

                diceOneImg.src = `images/dice/sith/${countRolls}.png`;
                diceTwoImg.src = `images/dice/sith/${countRolls}.png`;
                diceThreeImg.src = `images/dice/jedi/${countRolls}.png`;
                diceFourImg.src = `images/dice/jedi/${countRolls}.png`;

            }
        }
    
        TimeoutOne = setTimeout(function(){
            Animation = requestAnimationFrame(diceRoll);
        },85)

    }

    TimeoutTwo = setTimeout(function(){

        clearTimeout(TimeoutOne);
        cancelAnimationFrame(Animation);
        

        plOneRoundScore.innerHTML = `Round: ${player1.showRound()}`;
        plOneTotalScore.innerHTML = `Total: ${player1.showTotal()}`;

        plTwoRoundScore.innerHTML = `Round: ${playerPC.showRound()}`;
        plTwoTotalScore.innerHTML = `Total: ${playerPC.showTotal()}`;

        if(player1.showSide() != "Darth"){
            diceOneImg.src = `images/dice/jedi/${player1.showDiceOne()}.png`;
            diceTwoImg.src = `images/dice/jedi/${player1.showDiceTwo()}.png`;
            diceThreeImg.src = `images/dice/sith/${playerPC.showDiceOne()}.png`;
            diceFourImg.src = `images/dice/sith/${playerPC.showDiceTwo()}.png`;
        }else{
            diceOneImg.src = `images/dice/sith/${player1.showDiceOne()}.png`;
            diceTwoImg.src = `images/dice/sith/${player1.showDiceTwo()}.png`;
            diceThreeImg.src = `images/dice/jedi/${playerPC.showDiceOne()}.png`;
            diceFourImg.src = `images/dice/jedi/${playerPC.showDiceTwo()}.png`;
        }

        

        if(roundNumber == 1){
            if(player1.showRound() > playerPC.showRound()){
                roundH2.innerHTML = `${player1.showSide()} ${player1.showUserName()} wins round I`;
                spanColorOne.innerHTML = `${player1.showRound()}`;
                spanColorTwo.innerHTML = `${playerPC.showRound()}`;

                if(player1.showSide() == "Jedi Knight"){
                    roundImg.src = "images/lose_win_round/darth_maul_death.gif";
                    spanColorOne.style.color = "blue";
                    spanColorTwo.style.color = "red";
                }else{
                    roundImg.src = "images/lose_win_round/qui_gon_death.gif";
                    spanColorOne.style.color = "red";
                    spanColorTwo.style.color = "blue";
                }

            }else if(player1.showRound() < playerPC.showRound()){
                roundH2.innerHTML = `${playerPC.showSide()} ${playerPC.showUserName()} wins round I`;
                spanColorOne.innerHTML = `${player1.showRound()}`;
                spanColorTwo.innerHTML = `${playerPC.showRound()}`;
                if(playerPC.showSide() == "Jedi Knight"){
                    roundImg.src = "images/lose_win_round/darth_maul_death.gif";
                    spanColorOne.style.color = "red";
                    spanColorTwo.style.color = "blue";
                }else{
                    roundImg.src = "images/lose_win_round/qui_gon_death.gif";
                    spanColorOne.style.color = "blue";
                    spanColorTwo.style.color = "red";
                }
            }else{
                roundH2.innerHTML = `Draw`;
                spanColorOne.innerHTML = `${player1.showRound()}`;
                spanColorTwo.innerHTML = `${playerPC.showRound()}`;
                if(playerPC.showSide() == "Jedi Knight"){
                    roundImg.src = "images/lose_win_round/draw.gif";
                    spanColorOne.style.color = "red";
                    spanColorTwo.style.color = "blue";
                }else{
                    roundImg.src = "images/lose_win_round/draw.gif";
                    spanColorOne.style.color = "blue";
                    spanColorTwo.style.color = "red";
                }
            }
        }else if(roundNumber == 2){
            if(player1.showRound() > playerPC.showRound()){
                roundH2.innerHTML = `${player1.showSide()} ${player1.showUserName()} wins round II`;
                spanColorOne.innerHTML = `${player1.showRound()}`;
                spanColorTwo.innerHTML = `${playerPC.showRound()}`;

                if(player1.showSide() == "Jedi Knight"){
                    roundImg.src = "images/lose_win_round/Jango_Fett_death.gif";
                    spanColorOne.style.color = "blue";
                    spanColorTwo.style.color = "red";
                }else{
                    roundImg.src = "images/lose_win_round/anakin_hand.gif";
                    spanColorOne.style.color = "red";
                    spanColorTwo.style.color = "blue";
                }

            }else if(player1.showRound() < playerPC.showRound()){
                roundH2.innerHTML = `${playerPC.showSide()} ${playerPC.showUserName()} wins round II`;
                spanColorOne.innerHTML = `${player1.showRound()}`;
                spanColorTwo.innerHTML = `${playerPC.showRound()}`;

                if(playerPC.showSide() == "Jedi Knight"){
                    roundImg.src = "images/lose_win_round/Jango_Fett_death.gif";
                    spanColorOne.style.color = "red";
                    spanColorTwo.style.color = "blue";
                }else{
                    roundImg.src = "images/lose_win_round/anakin_hand.gif";
                    spanColorOne.style.color = "blue";
                    spanColorTwo.style.color = "red";
                }
            }else{
                
                    roundH2.innerHTML = `Draw`;
                    spanColorOne.innerHTML = `${player1.showRound()}`;
                    spanColorTwo.innerHTML = `${playerPC.showRound()}`;
                    if(playerPC.showSide() == "Jedi Knight"){
                        roundImg.src = "images/lose_win_round/draw.gif";
                        spanColorOne.style.color = "red";
                        spanColorTwo.style.color = "blue";
                    }else{
                        roundImg.src = "images/lose_win_round/draw.gif";
                        spanColorOne.style.color = "blue";
                        spanColorTwo.style.color = "red";
                    }
            }
        }else{
            if(player1.showRound() > playerPC.showRound()){
                roundH2.innerHTML = `${player1.showSide()} ${player1.showUserName()} wins round III`;
                spanColorOne.innerHTML = `${player1.showRound()}`;
                spanColorTwo.innerHTML = `${playerPC.showRound()}`;

                if(player1.showSide() == "Jedi Knight"){
                    roundImg.src = "images/lose_win_round/star-wars-grievous.gif";
                    spanColorOne.style.color = "blue";
                    spanColorTwo.style.color = "red";
                }else{
                    roundImg.src = "images/lose_win_round/windu death.gif";
                    spanColorOne.style.color = "red";
                    spanColorTwo.style.color = "blue";
                }

            }else if(player1.showRound() < playerPC.showRound()){
                roundH2.innerHTML = `${playerPC.showSide()} ${playerPC.showUserName()} wins round III`;
                spanColorOne.innerHTML = `${player1.showRound()}`;
                spanColorTwo.innerHTML = `${playerPC.showRound()}`;

                if(playerPC.showSide() == "Jedi Knight"){
                    roundImg.src = "images/lose_win_round/star-wars-grievous.gif";
                    spanColorOne.style.color = "red";
                    spanColorTwo.style.color = "blue";
                }else{
                    roundImg.src = "images/lose_win_round/windu death.gif";
                    spanColorOne.style.color = "blue";
                    spanColorTwo.style.color = "red";
                }
            }else{

                roundH2.innerHTML = `Draw`;
                spanColorOne.innerHTML = `${player1.showRound()}`;
                spanColorTwo.innerHTML = `${playerPC.showRound()}`;
                if(playerPC.showSide() == "Jedi Knight"){
                    roundImg.src = "images/lose_win_round/draw.gif";
                    spanColorOne.style.color = "red";
                    spanColorTwo.style.color = "blue";
                }else{
                    roundImg.src = "images/lose_win_round/draw.gif";
                    spanColorOne.style.color = "blue";
                    spanColorTwo.style.color = "red";
                }

            }
        }



    }, 1500);





    btnNewGame.disabled = true;
    btnRoll.disabled = true;

    TimeoutPop = setTimeout(function(){

        popupTwo.style.display = "block";

    }, 2500);

    

    closePop.addEventListener("click", function(){
        popupTwo.style.display = "none";
        if(roundNumber >= 3){
            btnRoll.disabled = true;
            btnNewGame.disabled = false;
        }else{
            btnNewGame.disabled = false;
            btnRoll.disabled = false;
        }
        
    

    
      
        if(roundNumber >= 3 && !flagOne){


            btnRoll.disabled = true;


            TimeoutFinal = setTimeout(function(){
            
                if(player1.showTotal() > playerPC.showTotal()){
                    roundH2.innerHTML = `${player1.showSide()} ${player1.showUserName()} wins the game`;
                    spanColorOne.innerHTML = `${player1.showTotal()}`;
                    spanColorTwo.innerHTML = `${playerPC.showTotal()}`;

                    if(player1.showSide() == "Jedi Knight"){
                        roundImg.src = "images/lose_win_round/high_ground.gif";
                        spanColorOne.style.color = "blue";
                        spanColorTwo.style.color = "red";
                    }else{
                        roundImg.src = "images/lose_win_round/unlimited_power.gif";
                        spanColorOne.style.color = "red";
                        spanColorTwo.style.color = "blue";
                    }

                }else if(player1.showTotal() < playerPC.showTotal()){

                    roundH2.innerHTML = `${playerPC.showSide()} ${playerPC.showUserName()} wins the game`;
                    spanColorOne.innerHTML = `${player1.showTotal()}`;
                    spanColorTwo.innerHTML = `${playerPC.showTotal()}`;

                    if(playerPC.showSide() == "Jedi Knight"){
                        roundImg.src = "images/lose_win_round/high_ground.gif";
                        spanColorOne.style.color = "red";
                        spanColorTwo.style.color = "blue";
                    }else{
                        roundImg.src = "images/lose_win_round/unlimited_power.gif";
                        spanColorOne.style.color = "blue";
                        spanColorTwo.style.color = "red";
                    }

                }else{
                    roundH2.innerHTML = `Game Draw`;
                    spanColorOne.innerHTML = `${player1.showTotal()}`;
                    spanColorTwo.innerHTML = `${playerPC.showTotal()}`;
                    if(playerPC.showSide() == "Jedi Knight"){
                        roundImg.src = "images/lose_win_round/final_draw.gif";
                        spanColorOne.style.color = "red";
                        spanColorTwo.style.color = "blue";
                    }else{
                        roundImg.src = "images/lose_win_round/final_draw.gif";
                        spanColorOne.style.color = "blue";
                        spanColorTwo.style.color = "red";
                    }
                }

                popupTwo.style.display = "block";

                flagOne = true;

            }, 100);


        }

    });


}



