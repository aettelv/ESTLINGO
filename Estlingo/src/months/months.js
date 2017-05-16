import {HttpClient, json} from "aurelia-fetch-client";
import {AureliaCookie} from 'aurelia-cookie';

export class Months{
	januaryCorrect;
    februaryCorrect;
    marchCorrect;
    aprilCorrect;
    mayCorrect;
    juneCorrect;
    julyCorrect;
    augustCorrect;
	septemberCorrect;
	octoberCorrect;
	novemberCorrect;
	decemberCorrect;
    isCompletedCorrect;
    
    months() {

    	if(this.january == undefined ||
        	this.february == undefined ||
        	this.march == undefined ||
        	this.april == undefined ||
        	this.may == undefined ||
        	this.june == undefined ||
        	this.july == undefined ||
        	this.august == undefined ||
        	this.september == undefined ||
        	this.october == undefined ||
        	this.november == undefined ||
        	this.december == undefined){
            alert("You must fill the blanks before checking!");
            return;
        } else {
	    	if(this.january.toLowerCase() == "jaanuar"){
	            this.backgroundColor1 = "background-color:lightgreen;";
				this.januaryCorrect = true;
	        } else {
	        	this.backgroundColor1 = "background-color:lightcoral;";
	        }
	        
	        if(this.february.toLowerCase() == "veebruar"){
	            this.backgroundColor2 = "background-color:lightgreen;";
				this.februaryCorrect = true;
	        } else {
	        	this.backgroundColor2 = "background-color:lightcoral;";
	        }

	        if(this.march.toLowerCase() == "märts"){
	            this.backgroundColor3 = "background-color:lightgreen;";
				this.marchCorrect = true;
	        } else {
	        	this.backgroundColor3 = "background-color:lightcoral;";
	        }

	        if(this.april.toLowerCase() == "aprill"){
	            this.backgroundColor4 = "background-color:lightgreen;";
				this.aprilCorrect =true;
	        } else {
	        	this.backgroundColor4 = "background-color:lightcoral;";
	        }

	        if(this.may.toLowerCase() == "mai"){
	            this.backgroundColor5 = "background-color:lightgreen;";
				this.mayCorrect = true;
	        } else {
	        	this.backgroundColor5 = "background-color:lightcoral;";
	        }

	        if(this.june.toLowerCase() == "juuni"){
	            this.backgroundColor6 = "background-color:lightgreen;";
				this.juneCorrect = true;
	        } else {
	        	this.backgroundColor6 = "background-color:lightcoral;";
	        }

	        if(this.july.toLowerCase() == "juuli"){
	            this.backgroundColor7 = "background-color:lightgreen;";
				this.julyCorrect = true;
	        } else {
	        	this.backgroundColor7 = "background-color:lightcoral;";
	        }

	        if(this.august.toLowerCase() == "august"){
	            this.backgroundColor8 = "background-color:lightgreen;";
				this.augustCorrect = true;
	        } else {
	        	this.backgroundColor8 = "background-color:lightcoral;";
	        }

	        if(this.september.toLowerCase() == "september"){
	            this.backgroundColor9 = "background-color:lightgreen;";
				this.septemberCorrect = true;
	        } else {
	        	this.backgroundColor9 = "background-color:lightcoral;";
	        }

	        if(this.october.toLowerCase() == "oktoober"){
	            this.backgroundColor10 = "background-color:lightgreen;";
				this.octoberCorrect = true;
	        } else {
	        	this.backgroundColor10 = "background-color:lightcoral;";
	        }

	        if(this.november.toLowerCase() == "november"){
	            this.backgroundColor11 = "background-color:lightgreen;";
				this.novemberCorrect = true;
	        } else {
	        	this.backgroundColor11 = "background-color:lightcoral;";
	        }

	        if(this.december.toLowerCase() == "detsember"){
	            this.backgroundColor12 = "background-color:lightgreen;";
				this.decemberCorrect = true;
	        } else {
	        	this.backgroundColor12 = "background-color:lightcoral;";
	        }
	    }
		if (this.januaryCorrect = true &
			this.februaryCorrect == true &
			this.marchCorrect == true &
			this.aprilCorrect == true &
			this.mayCorrect == true &
			this.juneCorrect == true &
			this.julyCorrect == true &
			this.augustCorrect == true &
			this.septemberCorrect ==true &
			this.octoberCorrect == true &
			this.novemberCorrect == true &
			this.decemberCorrect == true){
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
         window.location.href='http://localhost:9000/#/human';
    }
}