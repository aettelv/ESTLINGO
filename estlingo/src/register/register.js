import {HttpClient, json} from "aurelia-fetch-client"

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
        
        let client = new HttpClient();
        client.fetch("http://localhost:8080/users/" + username)
            .then (response => response.json())
            .then (data => {
                if (JSON.stringify(data.password) === password){
                    window.location.href = "http://localhost:9000/#/home";
                }else{
                    alert("No such user or password exists!")
                }
            })
        
        console.log("getUser() finished");
    }
}