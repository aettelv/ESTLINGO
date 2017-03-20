export class select{
    
    constructor(){
        this.h1 = "Select equivalent"
		this.h2 = "Type equivalent"
    }
}

document.getElementById("correct").style.visibility = "hidden";
document.getElementById("notCorrect").style.visibility = "hidden";

function Right() {
    document.getElementById("notCorrect").style.visibility = "hidden";
    document.getElementById("correct").style.visibility = "visible";
}

function NotRight(){
    document.getElementById("correct").style.visibility = "hidden"
    document.getElementById("notCorrect").style.visibility = "visible";
}