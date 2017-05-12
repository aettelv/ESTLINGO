import {HttpClient, json} from "aurelia-fetch-client";
import {AureliaCookie} from 'aurelia-cookie';

export class Register{
    
    userData = {}
    
    addUser() {
        console.log("addUser() started");
    
        if(this.userData.username == undefined){
            console.log("Registered username field empty");
            alert("Please enter a username!");
            return;
        }
        if(this.userData.password == undefined){
            console.log("Registered password field empty");
            alert("Please enter a password!");
            return;
        }
        if(this.userData.e_mail == undefined){
            console.log("Registered email field empty");
            alert("Please enter a e-mail!");
            return;
        }
        if(this.userData.e_mail.indexOf('@') <= -1){
            console.log("Email must contain '@' symbol!");
            alert("Email must contain '@' symbol!");
            return;
        }
        if(this.userData.e_mail.indexOf('.') <= -1){
            console.log("Email must contain '.' symbol!");
            alert("Email must contain '.' symbol!");
            return;
        }
        
        let client = new HttpClient();
        client.fetch("http://localhost:8080/users/add", {
            'method': "POST",
            'body': json(this.userData)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server saatis " + data.username + data.password + data.e_mail);
        });
        
        AureliaCookie.set('isLoggedIn', true , {
            expiry: 1,
            path: '',
            domain: '',
            secure: false
        });
        
        AureliaCookie.set('username', this.userData.username , {
            expiry: 1,
            path: '',
            domain: '',
            secure: false
        });
        
        window.location.href = "http://localhost:9000/#/home";
        window.location.reload();
        
        console.log("addUser() finished");
    }

    getUser(){
        console.log("getUser() started");
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        console.log("inserted username: " + username);
        console.log("inserted password: " + password);
        
        if (username == ""){
            console.log("Username field enpty!");
            alert("Please enter a username!");
            return;
        }
        
        if (password == ""){
            console.log("Password field empty!");
            alert("Please enter a password!");
            return;
        }
        
        AureliaCookie.set('isLoggedIn', true , {
            expiry: 1,
            path: '',
            domain: '',
            secure: false
        });
        
        AureliaCookie.set('username', username , {
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
                    window.location.reload();
                }else{
                    alert("No such user or password exists!")
                }
            })
        
        console.log("getUser() finished");
    }
}