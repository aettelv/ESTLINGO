import {HttpClient, json} from "aurelia-fetch-client";
import {AureliaCookie} from 'aurelia-cookie';

export class Colours{
    
    whiteCorrect;
    BlackCorrect;
    RedCorrect;
    BlueCorrect;
    GreenCorrect;
    YellowCorrect;
    BrownCorrect;
    PurpleCorrect;
    isCompletedCorrect;
    
    colours() {

    	if(this.white == undefined ||
        	this.black == undefined ||
        	this.red == undefined ||
        	this.blue == undefined ||
        	this.green == undefined ||
        	this.yellow == undefined ||
        	this.brown == undefined ||
        	this.purple == undefined){
            alert("You must fill the blanks before checking!");
            return;
        } else {
	    	if(this.white.toLowerCase() == "valge"){
	            this.backgroundColor1 = "background-color:lightgreen;";
                this.whiteCorrect = true;
	        } else {
	        	this.backgroundColor1 = "background-color:lightcoral;";
	        }
	        
	        if(this.black.toLowerCase() == "must"){
	            this.backgroundColor2 = "background-color:lightgreen;";
                this.blackCorrect = true;
	        } else {
	        	this.backgroundColor2 = "background-color:lightcoral;";
	        }

	        if(this.red.toLowerCase() == "punane"){
	            this.backgroundColor3 = "background-color:lightgreen;";
                this.redCorrect = true;
	        } else {
	        	this.backgroundColor3 = "background-color:lightcoral;";
	        }

	        if(this.blue.toLowerCase() == "sinine"){
	            this.backgroundColor4 = "background-color:lightgreen;";
                this.blueCorrect = true;
	        } else {
	        	this.backgroundColor4 = "background-color:lightcoral;";
	        }

	        if(this.green.toLowerCase() == "roheline"){
	            this.backgroundColor5 = "background-color:lightgreen;";
                this.greenCorrect = true;
	        } else {
	        	this.backgroundColor5 = "background-color:lightcoral;";
	        }

	        if(this.yellow.toLowerCase() == "kollane"){
	            this.backgroundColor6 = "background-color:lightgreen;";
                this.yellowCorrect = true;
	        } else {
	        	this.backgroundColor6 = "background-color:lightcoral;";
	        }

	        if(this.brown.toLowerCase() == "pruun"){
	            this.backgroundColor7 = "background-color:lightgreen;";
                this.brownCorrect = true;
	        } else {
	        	this.backgroundColor7 = "background-color:lightcoral;";
	        }

	        if(this.purple.toLowerCase() == "lilla" || this.purple.toLowerCase() == "purpur" || this.purple.toLowerCase() == "violetne"){
	            this.backgroundColor8 = "background-color:lightgreen;";
                this.purpleCorrect = true;
	        } else {
	        	this.backgroundColor8 = "background-color:lightcoral;";
	        }
    	}
        if(this.whiteCorrect == true &
          this.blackCorrect == true &
          this.redCorrect == true &
          this.blueCorrect == true &
          this.greenCorrect == true &
          this.yellowCorrect == true &
          this.brownCorrect == true &
          this.purpleCorrect == true){
            this.isCompleted = true;
        }
    }
    
    nextGame(){
        
        var oldScore = AureliaCookie.get('score');
        var score = parseInt(oldScore, 10) + 10;
        
        AureliaCookie.set('score', score , {
            expiry: 1,
            path: '',
            domain: '',
            secure: false
        });
         window.location.href='http://localhost:9000/#/numbers';
    }
}