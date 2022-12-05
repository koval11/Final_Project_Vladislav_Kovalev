class Dice{
    constructor(){
        this.faces[1,2,3,4,5,6]
        this.topFace = this.faces[0];
    }
    roll(){
        let i = Math.floor(Math.random() * 6);
        this.topFace = this.faces[i];
    }
}

class Player{
    constructor(){
        this.diceOne = new Dice();
        this.diceTwo = new Dice();
        this.total = 0;
        this.round = 0;
    }
    roll(){
        this.diceOne.roll();
        this.diceTwo.roll();
    }
}