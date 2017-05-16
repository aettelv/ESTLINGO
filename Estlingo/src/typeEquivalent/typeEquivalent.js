import {AureliaCookie} from 'aurelia-cookie';

export class type{
    
    colors;
    numbers;
    days;
    months;
    body;
    kitchen;
    
    constructor(){
    	this.h1 = "Colors"
    	this.h2 = "Numbers"
    	this.h3 = "Days of the week"
    	this.h4 = "Months"
    	this.h5 = "Human body"
    	this.h6 = "Kitchen"
        
        this.score = 0;
        
        if(!(AureliaCookie.get('score') == null)){
            this.score = AureliaCookie.get('score');
        }
        
        this.colors = true;
        
        console.log("score: " + this.score);
        
        if(this.score >= 10){
            this.numbers = true;
        }
        
        if(this.score >= 20){
            this.days = true;
        }
        
        if(this.score >= 30){
            this.months = true;
        }
        
        if(this.score >= 40){
            this.body = true;
        }
        
        if(this.score >= 50){
            this.kitchen = true;
        }
    }
}