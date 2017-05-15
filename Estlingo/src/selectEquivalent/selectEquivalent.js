import {AureliaCookie} from 'aurelia-cookie';

export class type{
    
    score;
    apple;
    chair;
    bicycle;
    potato;
    strawberry;
    clock;
    fork;
    
    constructor(){
    	this.h1 = "Apple"
    	this.h2 = "Chair"
    	this.h3 = "Bicycle"
    	this.h4 = "Potato"
    	this.h5 = "Strawberry"
    	this.h6 = "Clock"
        this.h7 = "Fork"
        
        this.score = 0;
        
        if(!(AureliaCookie.get('score') == null)){
            this.score = AureliaCookie.get('score');
        }
        
        this.apple = true;
        
        console.log("score: " + this.score);
        
        if(this.score > 10){
            this.chair = true;
        }
        
        if(this.score > 20){
            this.bicycle = true;
        }
        
        if(this.score > 30){
            this.potato = true;
        }
        
        if(this.score > 40){
            this.strawberry = true;
        }
        
        if(this.score > 50){
            this.clock = true;
        }
        
        if(this.score > 60){
            this.fork = true;
        }
    }
}