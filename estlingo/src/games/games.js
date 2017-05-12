import {AureliaCookie} from 'aurelia-cookie';

export class games{
    
    score;
    
    constructor(){
        this.h1 = "Select equivalent"
		this.h2 = "Type equivalent"
        
        if(!(AureliaCookie.get('score') == null)){
            this.score = AureliaCookie.get('score');
        }
    }
}