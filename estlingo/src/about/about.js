import {AureliaCookie} from 'aurelia-cookie';
import {HttpClient, json} from "aurelia-fetch-client";

export class about{
    
    constructor(){
        this.message = "ESTLINGO is the easiest way to learn Estonian."
		this.easy = "Learning language by games that are easy to understand. Pictures help to memorize words better and make connections that are afterwards easy to remember."
		this.fast = "Are you having a coffee break? Good, then you have more than enough time to play one of our games and educate yourself."
		this.family = "Language learning by games is so easy, that even kids can learn Estonian. Why not play language games with the whole family?"
		this.game = "Do you love games and puzzles? Then this is the right place for you!"


	    let client = new HttpClient();
        client.fetch("http://localhost:8080/pictures/easy")
            .then (response => response.json())
            .then (data => {
                this.location1 = data.path;
            })

        let client2 = new HttpClient();
        client2.fetch("http://localhost:8080/pictures/fast")
            .then (response => response.json())
            .then (data => {
                this.location2 = data.path;
            })

        let client3 = new HttpClient();
        client3.fetch("http://localhost:8080/pictures/family")
            .then (response => response.json())
            .then (data => {
                this.location3 = data.path;
            })

        let client4 = new HttpClient();
        client4.fetch("http://localhost:8080/pictures/game")
            .then (response => response.json())
            .then (data => {
                this.location4 = data.path;
            })
    }

}