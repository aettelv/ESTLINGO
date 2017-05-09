import {HttpClient, json} from "aurelia-fetch-client";
import {AureliaCookie} from 'aurelia-cookie';

export class Kitchen{
    kitchen() {

    	if(this.sink == undefined &
        	this.plate == undefined &
        	this.bowl == undefined &
        	this.glass == undefined &
        	this.cup == undefined &
        	this.fridge == undefined &
        	this.knife == undefined &
        	this.fork == undefined &
        	this.spoon == undefined &
        	this.oven == undefined &
        	this.stove == undefined &
        	this.sponge == undefined){
            alert("You must fill the blanks before checking!");
            return;
        } else {
	    	if(this.sink.toLowerCase() == "kraanikauss"){
	            this.backgroundColor1 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor1 = "background-color:lightcoral;";
	        }
	        
	        if(this.plate.toLowerCase() == "taldrik"){
	            this.backgroundColor2 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor2 = "background-color:lightcoral;";
	        }

	        if(this.bowl.toLowerCase() == "kauss"){
	            this.backgroundColor3 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor3 = "background-color:lightcoral;";
	        }

	        if(this.glass.toLowerCase() == "klaas"){
	            this.backgroundColor4 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor4 = "background-color:lightcoral;";
	        }

	        if(this.cup.toLowerCase() == "tass"){
	            this.backgroundColor5 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor5 = "background-color:lightcoral;";
	        }

	        if(this.fridge.toLowerCase() == "külmkapp"){
	            this.backgroundColor6 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor6 = "background-color:lightcoral;";
	        }

	        if(this.knife.toLowerCase() == "nuga"){
	            this.backgroundColor7 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor7 = "background-color:lightcoral;";
	        }

	        if(this.fork.toLowerCase() == "kahvel"){
	            this.backgroundColor8 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor8 = "background-color:lightcoral;";
	        }

	        if(this.spoon.toLowerCase() == "lusikas"){
	            this.backgroundColor9 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor9 = "background-color:lightcoral;";
	        }

	        if(this.oven.toLowerCase() == "ahi"){
	            this.backgroundColor10 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor10 = "background-color:lightcoral;";
	        }

	        if(this.stove.toLowerCase() == "pliit"){
	            this.backgroundColor11 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor11 = "background-color:lightcoral;";
	        }

	        if(this.sponge.toLowerCase() == "käsn"){
	            this.backgroundColor12 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor12 = "background-color:lightcoral;";
	        }
    	}
    }
}