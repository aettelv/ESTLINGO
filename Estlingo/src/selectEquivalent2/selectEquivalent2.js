import {AureliaCookie} from 'aurelia-cookie';
import {HttpClient, json} from "aurelia-fetch-client";

export class select{
    
    isTrue;
    isFalse;
    gameCompleted;
    
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
        window.location.href='http://localhost:9000/#/selectEquivalent3';
    }
}