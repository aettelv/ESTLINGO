import {HttpClient, json} from "aurelia-fetch-client";
import {AureliaCookie} from 'aurelia-cookie';

export class Days{
	mondayCorrect;
    tuesdayCorrect;
    wednesdayCorrect;
    thursdayCorrect;
    fridayCorrect;
    saturdayCorrect;
    sundayCorrect;
    isCompletedCorrect;
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
				this.mondayCorrect = true;
	        } else {
	        	this.backgroundColor1 = "background-color:lightcoral;";
	        }
	        
	        if(this.tuesday.toLowerCase() == "teisipäev"){
	            this.backgroundColor2 = "background-color:lightgreen;";
				this.tuesdayCorrect = true;
	        } else {
	        	this.backgroundColor2 = "background-color:lightcoral;";
	        }

	        if(this.wednesday.toLowerCase() == "kolmapäev"){
	            this.backgroundColor3 = "background-color:lightgreen;";
				this.wednesdayCorrect = true;
	        } else {
	        	this.backgroundColor3 = "background-color:lightcoral;";
	        }

	        if(this.thursday.toLowerCase() == "neljapäev"){
	            this.backgroundColor4 = "background-color:lightgreen;";
				this.thursdayCorrect = true;
	        } else {
	        	this.backgroundColor4 = "background-color:lightcoral;";
	        }

	        if(this.friday.toLowerCase() == "reede"){
	            this.backgroundColor5 = "background-color:lightgreen;";
				this.fridayCorrect = true;
	        } else {
	        	this.backgroundColor5 = "background-color:lightcoral;";
	        }

	        if(this.saturday.toLowerCase() == "laupäev"){
	            this.backgroundColor6 = "background-color:lightgreen;";
				this.saturdayCorrect = true;
	        } else {
	        	this.backgroundColor6 = "background-color:lightcoral;";
	        }

	        if(this.sunday.toLowerCase() == "pühapäev"){
	            this.backgroundColor7 = "background-color:lightgreen;";
				this.sundayCorrect = true;
	        } else {
	        	this.backgroundColor7 = "background-color:lightcoral;";
	        }
	    }
		if(this.mondayCorrect == true &
	      this.tuesdayCorrect == true &
	      this.wednesdayCorrect == true &
	      this.thursdayCorrect == true &
	      this.fridayCorrect == true &
	      this.saturdayCorrect == true &
	      this.sundayCorrect == true){
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
        
        var username = AureliaCookie.get('username');
        
        let client2 = new HttpClient();
        client2.fetch("http://localhost:8080/users/" + username, {
            'method': "GET"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.username + " " + data.password + " " + data.e_mail + " " + data.score);
                this.userData = data;

                console.log("userData.score: " + this.userData.score);
                this.userData.score = score;
                console.log("new userData.score: " + this.userData.score);

                let client = new HttpClient();
                client.fetch("http://localhost:8080/users/add", {
                    'method': "POST",
                    'body': json(this.userData),
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log("Server saatis: " + data.username + " " + data.password + " " + data.e_mail + " " + data.score);
                });
        });
         window.location.href='http://localhost:9000/#/months';
    }
}