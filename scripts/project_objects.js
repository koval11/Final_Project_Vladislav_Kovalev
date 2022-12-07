class Dice{
    constructor(){
        this.faces = [1,2,3,4,5,6];
        this.topFace = this.faces[0];
    }
    roll(){
        let i = Math.floor(Math.random() * 6);
        this.topFace = this.faces[i];
    }
    showTopFace(){
        return this.topFace;
    }
}

class Player{
    constructor(side, userName){
        this.diceOne = new Dice();
        this.diceTwo = new Dice();
        this.total = 0;
        this.round = 0;
        this.userName = userName;
        this.side = side;
    }
    play(){
        this.diceOne.roll();
        this.diceTwo.roll();
        if(this.diceOne.showTopFace() == 1 || this.diceTwo.showTopFace() == 1){
            this.round = 0;
        }else if(this.diceOne.showTopFace() == this.diceTwo.showTopFace()){
            this.round = 2 * ( this.diceOne.showTopFace() + this.diceTwo.showTopFace() );
        }else{
            this.round = this.diceOne.showTopFace() + this.diceTwo.showTopFace();
        }
        
        this.total += this.round;
        // this.total = 10;
    }

    showDiceOne(){
        return this.diceOne.showTopFace();
    }

    showDiceTwo(){
        return this.diceTwo.showTopFace();
    }

    showRound(){
        return this.round;
    }

    showTotal(){
        return this.total;
    }

    showUserName(){
        return this.userName;
    }

    showSide(){
        return this.side;
    }
}

