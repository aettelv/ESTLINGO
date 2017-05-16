import {AureliaCookie} from 'aurelia-cookie';
import {HttpClient, json} from "aurelia-fetch-client";

export class select{
    
    isTrue;
    isFalse;
    gameCompleted;
    
    constructor(){
        let client = new HttpClient();
        client.fetch("http://localhost:8080/pictures/fork")
            .then (response => response.json())
            .then (data => {
                this.location = data.path;
            })
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
        window.location.href='http://localhost:9000/#/games';
    }
}