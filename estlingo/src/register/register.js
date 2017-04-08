import {HttpClient, json} from "aurelia-fetch-client";
import {AureliaCookie} from 'aurelia-cookie';

export class Register{
    
    userData = {}
    
    constructor(){
        this.message = "Register user here! (page: register)"
    }
    
    addUser() {
        console.log("addUser() started");
        let client = new HttpClient();
        client.fetch("http://localhost:8080/users/add", {
            'method': "POST",
            'body': json(this.userData)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server saatis " + data.username + data.password + data.e_mail);
        });
        
        console.log("addUser() finished");
    }

    getUser(){
        console.log("getUser() started");
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        console.log("inserted username: " +username);
        console.log("inserted password: " + password);
        
        if (username == ""){
            console.log("Username field enpty!");
            return;
        }
        
        if (password == ""){
            console.log("Password field enpty!");
            return;
        }
        
        AureliaCookie.set('isLoggedIn', true , {
            expiry: 1,
            path: '',
            domain: '',
            secure: false
        });
        
        let client = new HttpClient();
        client.fetch("http://localhost:8080/users/" + username)
            .then (response => response.json())
            .then (data => {
                if (JSON.stringify(data.password) === '"' + password + '"'){
                    window.location.href = "http://localhost:9000/#/home";
                }else{
                    alert("No such user or password exists!")
                }
            })
        
        console.log("getUser() finished");
    }
}