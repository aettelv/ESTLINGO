import {HttpClient, json} from "aurelia-fetch-client";
import {AureliaCookie} from 'aurelia-cookie';

export class Kitchen{
	sinkCorrect;
	plateCorrect;
	bowlCorrect;
	glassCorrect;
	cupCorrect;
	fridgeCorrect;
	knifeCorrect;
	forkCorrect;
	spoonCorrect;
	ovenCorrect;
	stoceCorrect;
	spongeCorrect;
	isCompletedCorrect;

    kitchen() {

    	if(this.sink == undefined ||
        	this.plate == undefined ||
        	this.bowl == undefined ||
        	this.glass == undefined ||
        	this.cup == undefined ||
        	this.fridge == undefined ||
        	this.knife == undefined ||
        	this.fork == undefined ||
        	this.spoon == undefined ||
        	this.oven == undefined ||
        	this.stove == undefined ||
        	this.sponge == undefined){
            alert("You must fill the blanks before checking!");
            return;
        } else {
	    	if(this.sink.toLowerCase() == "kraanikauss"){
	            this.backgroundColor1 = "background-color:lightgreen;";
				this.sinkCorrect = true;
	        } else {
	        	this.backgroundColor1 = "background-color:lightcoral;";
	        }
	        
	        if(this.plate.toLowerCase() == "taldrik"){
	            this.backgroundColor2 = "background-color:lightgreen;";
				this.plateCorrect = true;
	        } else {
	        	this.backgroundColor2 = "background-color:lightcoral;";
	        }

	        if(this.bowl.toLowerCase() == "kauss"){
	            this.backgroundColor3 = "background-color:lightgreen;";
				this.bowlCorrect = true;
	        } else {
	        	this.backgroundColor3 = "background-color:lightcoral;";
	        }

	        if(this.glass.toLowerCase() == "klaas"){
	            this.backgroundColor4 = "background-color:lightgreen;";
				this.glassCorrect = true;
	        } else {
	        	this.backgroundColor4 = "background-color:lightcoral;";
	        }

	        if(this.cup.toLowerCase() == "tass"){
	            this.backgroundColor5 = "background-color:lightgreen;";
				this.cupCorrect = true;
	        } else {
	        	this.backgroundColor5 = "background-color:lightcoral;";
	        }

	        if(this.fridge.toLowerCase() == "külmkapp"){
	            this.backgroundColor6 = "background-color:lightgreen;";
				this.fridgeCorrect = true;
	        } else {
	        	this.backgroundColor6 = "background-color:lightcoral;";
	        }

	        if(this.knife.toLowerCase() == "nuga"){
	            this.backgroundColor7 = "background-color:lightgreen;";
				this.knifeCorrect = true;
	        } else {
	        	this.backgroundColor7 = "background-color:lightcoral;";
	        }

	        if(this.fork.toLowerCase() == "kahvel"){
	            this.backgroundColor8 = "background-color:lightgreen;";
				this.forkCorrect = true;
	        } else {
	        	this.backgroundColor8 = "background-color:lightcoral;";
	        }

	        if(this.spoon.toLowerCase() == "lusikas"){
	            this.backgroundColor9 = "background-color:lightgreen;";
				this.spoonCorrect = true;
	        } else {
	        	this.backgroundColor9 = "background-color:lightcoral;";
	        }

	        if(this.oven.toLowerCase() == "ahi"){
	            this.backgroundColor10 = "background-color:lightgreen;";
				this.ovenCorrect = true;
	        } else {
	        	this.backgroundColor10 = "background-color:lightcoral;";
	        }

	        if(this.stove.toLowerCase() == "pliit"){
	            this.backgroundColor11 = "background-color:lightgreen;";
				this.stoceCorrect = true;
	        } else {
	        	this.backgroundColor11 = "background-color:lightcoral;";
	        }

	        if(this.sponge.toLowerCase() == "käsn"){
	            this.backgroundColor12 = "background-color:lightgreen;";
				this.spongeCorrect = true;
	        } else {
	        	this.backgroundColor12 = "background-color:lightcoral;";
	        }
	    }
		if (
			this.sinkCorrect == true &
			this.plateCorrect == true &
			this.bowlCorrect == true &
			this.glassCorrect == true &
			this.cupCorrect == true &
			this.fridgeCorrect == true &
			this.knifeCorrect == true &
			this.forkCorrect == true &
			this.spoonCorrect == true &
			this.ovenCorrect == true &
			this.stoceCorrect == true &
			this.spongeCorrect == true){
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
         window.location.href='http://localhost:9000/#/games';
    }
}