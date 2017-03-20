import {HttpClient, json} from "aurelia-fetch-client"

export class Register{
    
    userData = {}
    
    constructor(){
        this.message = "Register user here! (page: register)"
    }
    
    addUser() {
        let client = new HttpClient();

        client.fetch('http://localhost:8080/users/add', {
            'method': "POST",
            'body': json(this.userData)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server saatis " + data.username + data.password + data.eMail);
        });

        console.log("Method executed!")
    }
}