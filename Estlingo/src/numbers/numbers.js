import {HttpClient, json} from "aurelia-fetch-client";
import {AureliaCookie} from 'aurelia-cookie';

export class Numbers{
    numbers() {

    	if(this.one == undefined &
        	this.two == undefined &
        	this.three == undefined &
        	this.four == undefined &
        	this.five == undefined &
        	this.six == undefined &
        	this.seven == undefined &
        	this.eight == undefined &
        	this.nine == undefined &
        	this.ten == undefined){
            alert("You must fill the blanks before checking!");
            return;
        } else {
	    	if(this.one.toLowerCase() == "üks"){
	            this.backgroundColor1 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor1 = "background-color:lightcoral;";
	        }
	        
	        if(this.two.toLowerCase() == "kaks"){
	            this.backgroundColor2 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor2 = "background-color:lightcoral;";
	        }

	        if(this.three.toLowerCase() == "kolm"){
	            this.backgroundColor3 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor3 = "background-color:lightcoral;";
	        }

	        if(this.four.toLowerCase() == "neli"){
	            this.backgroundColor4 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor4 = "background-color:lightcoral;";
	        }

	        if(this.five.toLowerCase() == "viis"){
	            this.backgroundColor5 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor5 = "background-color:lightcoral;";
	        }

	        if(this.six.toLowerCase() == "kuus"){
	            this.backgroundColor6 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor6 = "background-color:lightcoral;";
	        }

	        if(this.seven.toLowerCase() == "seitse"){
	            this.backgroundColor7 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor7 = "background-color:lightcoral;";
	        }

	        if(this.eight.toLowerCase() == "kaheksa"){
	            this.backgroundColor8 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor8 = "background-color:lightcoral;";
	        }

	        if(this.nine.toLowerCase() == "üheksa"){
	            this.backgroundColor9 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor9 = "background-color:lightcoral;";
	        }

	        if(this.ten.toLowerCase() == "kümme"){
	            this.backgroundColor10 = "background-color:lightgreen;";
	        } else {
	        	this.backgroundColor10 = "background-color:lightcoral;";
	        }
    	}
    }
}