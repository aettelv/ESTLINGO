import {HttpClient, json} from "aurelia-fetch-client"

export class Register{
    
    userData = {}
    
    constructor(){
        this.message = "Register user here! (page: register)"
    }
    
    /*addUser(){
        let client = new HttpClient();
        client.fetch('http://localhost:8080/users/add', {  //Siia peab vist kunagi lisama serveri aadressi
            "method": "POST",
            "body": json{this.userData}
        })
            .then(response => response.json())
            .then(data => {
            console.log("Server saatis username: " + data.username);
        });
        
        console.log("addUser method executed!")
    }*/
}