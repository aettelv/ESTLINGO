import {AureliaCookie} from 'aurelia-cookie';
import {HttpClient, json} from "aurelia-fetch-client";

export class select{
    
    isTrue;
    isFalse;
    gameCompleted;
    userData = null;
    
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
        
        var oldScore = AureliaCookie.get('score');
        var score = parseInt(oldScore, 10) + 10;
        
        AureliaCookie.set('score', score , {
            expiry: 1,
            path: '',
            domain: '',
            secure: false
        });
        
        var username = AureliaCookie.get('username');

        console.log("username: " + username);
        console.log("score: " + score);
        
        let client2 = new HttpClient();
        client2.fetch("http://localhost:8080/users/" + username)
            .then (response => response.json())
            .then (data => {
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
            'body': json(this.userData);
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server saatis " + data.username + " " + data.password + " " + data.e_mail);
        })
        window.location.href='http://localhost:9000/#/selectEquivalent2';
    }
}