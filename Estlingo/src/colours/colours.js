import {HttpClient, json} from "aurelia-fetch-client";
import {AureliaCookie} from 'aurelia-cookie';

export class Colours{
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
	        } else {
	        	this.backgroundColor1 = "background-color:lightcoral;";
	        }
	        
	        if(this.black.toLowerCase() == "must"){
	            this.backgroundColor2 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor2 = "background-color:lightcoral;";
	        }

	        if(this.red.toLowerCase() == "punane"){
	            this.backgroundColor3 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor3 = "background-color:lightcoral;";
	        }

	        if(this.blue.toLowerCase() == "sinine"){
	            this.backgroundColor4 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor4 = "background-color:lightcoral;";
	        }

	        if(this.green.toLowerCase() == "roheline"){
	            this.backgroundColor5 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor5 = "background-color:lightcoral;";
	        }

	        if(this.yellow.toLowerCase() == "kollane"){
	            this.backgroundColor6 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor6 = "background-color:lightcoral;";
	        }

	        if(this.brown.toLowerCase() == "pruun"){
	            this.backgroundColor7 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor7 = "background-color:lightcoral;";
	        }

	        if(this.purple.toLowerCase() == "lilla"){
	            this.backgroundColor8 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor8 = "background-color:lightcoral;";
	        }
    	}
    }
}