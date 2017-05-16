import {AureliaCookie} from 'aurelia-cookie';
import {HttpClient, json} from "aurelia-fetch-client";

export class about{
    
    constructor(){
        this.message = "Contact us:"
        this.email = "Email: estlingo@gmail.com"
        this.phone = "Phone: +372 1234 5678"

        let client1 = new HttpClient();
        client1.fetch("http://localhost:8080/pictures/email")
            .then (response => response.json())
            .then (data => {
                this.location1 = data.path;
            })

        let client2 = new HttpClient();
        client2.fetch("http://localhost:8080/pictures/phone")
            .then (response => response.json())
            .then (data => {
                this.location2 = data.path;
            })
    }
}