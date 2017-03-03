document.getElementById("correct").style.visibility = "hidden"
document.getElementById("notCorrect").style.visibility = "hidden"

function Right() {
    document.getElementById("correct").style.visibility = "visible";
}

function NotRight(){
    document.getElementById("notCorrect").style.visibility = "visible";
}

//Miskipärast kuvab ta h3 vaid hetkeks, mis võiks lahendus olla?