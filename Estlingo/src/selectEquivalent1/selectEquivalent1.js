export class select{
    
    isTrue;
    isFalse;
    gameCompleted;
    
    constructor(){
    }
    
    Right(){
        this.isTrue = true;
        this.isFalse = false;
        this.gameCompleted = true;
    }
    
    NotRight(){
        this.isFalse = true;
        this.isTrue = false;
    }
    
    
}