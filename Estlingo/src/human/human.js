import {HttpClient, json} from "aurelia-fetch-client";
import {AureliaCookie} from 'aurelia-cookie';

export class Human{
    human() {

    	if(this.head == undefined ||
        	this.hand == undefined ||
        	this.leg == undefined ||
        	this.mouth == undefined ||
        	this.nose == undefined ||
        	this.ear == undefined ||
        	this.knee == undefined ||
        	this.finger == undefined ||
        	this.tongue == undefined ||
        	this.hair == undefined ||
        	this.chest == undefined ||
        	this.back == undefined){
            alert("You must fill the blanks before checking!");
            return;
        } else {
	    	if(this.head.toLowerCase() == "pea"){
	            this.backgroundColor1 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor1 = "background-color:lightcoral;";
	        }
	        
	        if(this.hand.toLowerCase() == "käsi"){
	            this.backgroundColor2 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor2 = "background-color:lightcoral;";
	        }

	        if(this.leg.toLowerCase() == "jalg"){
	            this.backgroundColor3 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor3 = "background-color:lightcoral;";
	        }

	        if(this.mouth.toLowerCase() == "suu"){
	            this.backgroundColor4 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor4 = "background-color:lightcoral;";
	        }

	        if(this.nose.toLowerCase() == "nina"){
	            this.backgroundColor5 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor5 = "background-color:lightcoral;";
	        }

	        if(this.ear.toLowerCase() == "kõrv"){
	            this.backgroundColor6 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor6 = "background-color:lightcoral;";
	        }

	        if(this.knee.toLowerCase() == "põlv"){
	            this.backgroundColor7 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor7 = "background-color:lightcoral;";
	        }

	        if(this.finger.toLowerCase() == "sõrm"){
	            this.backgroundColor8 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor8 = "background-color:lightcoral;";
	        }

	        if(this.tongue.toLowerCase() == "keel"){
	            this.backgroundColor9 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor9 = "background-color:lightcoral;";
	        }

	        if(this.hair.toLowerCase() == "juuksed"){
	            this.backgroundColor10 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor10 = "background-color:lightcoral;";
	        }

	        if(this.chest.toLowerCase() == "rind"){
	            this.backgroundColor11 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor11 = "background-color:lightcoral;";
	        }

	        if(this.back.toLowerCase() == "selg"){
	            this.backgroundColor12 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor12 = "background-color:lightcoral;";
	        }
    	}
    }
}