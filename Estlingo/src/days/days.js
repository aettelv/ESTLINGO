import {HttpClient, json} from "aurelia-fetch-client";
import {AureliaCookie} from 'aurelia-cookie';

export class Days{
    days() {

    	if(this.monday == undefined ||
        	this.tuesday == undefined ||
        	this.wednesday == undefined ||
        	this.thursday == undefined ||
        	this.friday == undefined ||
        	this.saturday == undefined ||
        	this.sunday == undefined){
            alert("You must fill the blanks before checking!");
            return;
        } else {
	    	if(this.monday.toLowerCase() == "esmaspäev"){
	            this.backgroundColor1 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor1 = "background-color:lightcoral;";
	        }
	        
	        if(this.tuesday.toLowerCase() == "teisipäev"){
	            this.backgroundColor2 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor2 = "background-color:lightcoral;";
	        }

	        if(this.wednesday.toLowerCase() == "kolmapäev"){
	            this.backgroundColor3 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor3 = "background-color:lightcoral;";
	        }

	        if(this.thursday.toLowerCase() == "neljapäev"){
	            this.backgroundColor4 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor4 = "background-color:lightcoral;";
	        }

	        if(this.friday.toLowerCase() == "reede"){
	            this.backgroundColor5 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor5 = "background-color:lightcoral;";
	        }

	        if(this.saturday.toLowerCase() == "laupäev"){
	            this.backgroundColor6 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor6 = "background-color:lightcoral;";
	        }

	        if(this.sunday.toLowerCase() == "pühapäev"){
	            this.backgroundColor7 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor7 = "background-color:lightcoral;";
	        }
    	}
    }
}