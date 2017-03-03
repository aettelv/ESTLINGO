export class games{
    
    constructor(){
        this.message = "Games go here! (page:games)"
    }
    
    checkAnswer(choice){
        if (choice == 'Oun'){
            this.answer = "True"
        } else {
            this.answer = "False"
        }
    }
}