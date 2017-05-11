import {HttpClient, json} from "aurelia-fetch-client";
import {AureliaCookie} from 'aurelia-cookie';

export class Months{
    months() {

    	if(this.january == undefined &
        	this.february == undefined &
        	this.march == undefined &
        	this.april == undefined &
        	this.may == undefined &
        	this.june == undefined &
        	this.july == undefined &
        	this.august == undefined &
        	this.september == undefined &
        	this.october == undefined &
        	this.november == undefined &
        	this.december == undefined){
            alert("You must fill the blanks before checking!");
            return;
        } else {
	    	if(this.january.toLowerCase() == "jaanuar"){
	            this.backgroundColor1 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor1 = "background-color:lightcoral;";
	        }
	        
	        if(this.february.toLowerCase() == "veebruar"){
	            this.backgroundColor2 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor2 = "background-color:lightcoral;";
	        }

	        if(this.march.toLowerCase() == "märts"){
	            this.backgroundColor3 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor3 = "background-color:lightcoral;";
	        }

	        if(this.april.toLowerCase() == "aprill"){
	            this.backgroundColor4 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor4 = "background-color:lightcoral;";
	        }

	        if(this.may.toLowerCase() == "mai"){
	            this.backgroundColor5 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor5 = "background-color:lightcoral;";
	        }

	        if(this.june.toLowerCase() == "juuni"){
	            this.backgroundColor6 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor6 = "background-color:lightcoral;";
	        }

	        if(this.july.toLowerCase() == "juuli"){
	            this.backgroundColor7 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor7 = "background-color:lightcoral;";
	        }

	        if(this.august.toLowerCase() == "august"){
	            this.backgroundColor8 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor8 = "background-color:lightcoral;";
	        }

	        if(this.september.toLowerCase() == "september"){
	            this.backgroundColor9 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor9 = "background-color:lightcoral;";
	        }

	        if(this.october.toLowerCase() == "oktoober"){
	            this.backgroundColor10 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor10 = "background-color:lightcoral;";
	        }

	        if(this.november.toLowerCase() == "november"){
	            this.backgroundColor11 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor11 = "background-color:lightcoral;";
	        }

	        if(this.december.toLowerCase() == "detsember"){
	            this.backgroundColor12 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor12 = "background-color:lightcoral;";
	        }
    	}
    }
}