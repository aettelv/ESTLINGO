import {AureliaCookie} from 'aurelia-cookie';
import {HttpClient, json} from "aurelia-fetch-client";

export class select{
    
    isTrue;
    isFalse;
    gameCompleted;
    userData = {};
    
    constructor(){
    }
    
    Right(){
        this.isTrue = true;
        this.isFalse = false;
        this.gameCompleted = true;
    }
    
    NotRight(){
        this.isFalse = true;
        this.isTrue = false;
    }
    
    nextGame(){
        
        //Adding new score
        var oldScore = AureliaCookie.get('score');
        var score = parseInt(oldScore, 10) + 10;
        
        //Update cookie
        AureliaCookie.set('score', score , {
            expiry: 1,
            path: '',
            domain: '',
            secure: false
        });
        
        //Saving new result to database:
        var username = AureliaCookie.get('username');

        console.log("username: " + username);
        console.log("score: " + score);
        
        let client2 = new HttpClient();
        /*client2.fetch("http://localhost:8080/users/" + username)
            .then (data => {
                this.userData.username = data.username;
        });*/
        client2.fetch("http://localhost:8080/users/" + username, {
            'method': "GET"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.username + " " + data.password + " " + data.e_meil + " " + data.score),
                this.userData = data;
        });
        
        console.log("data: " + this.userData);
        console.log("username: " + this.userData.username);
        console.log("password: " + this.userData.password);
        console.log("e_meil: " + this.userData.e_meil);
        
        console.log("userData.score: " + this.userData.score);
        this.userData.score = score;
        console.log("new userData.score: " + this.userData.score);
        
        let client = new HttpClient();
        client.fetch("http://localhost:8080/users/update", {
            'method': "PUT",
            'body': json(this.userData),
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server saatis " + data.username + " " + data.password + " " + data.e_mail);
        });
       

       /*Jumping to next game*/ window.location.href='http://localhost:9000/#/selectEquivalent2';
    }
}