document.getElementById("correct").style.visibility = "hidden"
document.getElementById("notCorrect").style.visibility = "hidden"

function Right() {
    document.getElementById("notCorrect").style.visibility = "hidden";
    document.getElementById("correct").style.visibility = "visible";
}

function NotRight(){
    document.getElementById("correct").style.visibility = "hidden"
    document.getElementById("notCorrect").style.visibility = "visible";
}

function colours() {
    white = document.getElementById("white").value;
    valge = white.toLowerCase()
    black = document.getElementById("black").value;
    must = black.toLowerCase()
    red = document.getElementById("red").value;
    punane = red.toLowerCase()
    blue = document.getElementById("blue").value;
    sinine = blue.toLowerCase()
    
    green = document.getElementById("green").value;
    roheline = green.toLowerCase()
    yellow = document.getElementById("yellow").value;
    kollane = yellow.toLowerCase()
    brown = document.getElementById("brown").value;
    pruun = brown.toLowerCase()
    purple = document.getElementById("purple").value;
    lilla = purple.toLowerCase()
    
    if (valge == "valge") {
        document.getElementById("white").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("white").style.backgroundColor = "lightcoral";
    }
    if (must == "must") {
        document.getElementById("black").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("black").style.backgroundColor = "lightcoral";
    }
    if (punane == "punane") {
        document.getElementById("red").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("red").style.backgroundColor = "lightcoral";
    }
    if (sinine == "sinine") {
        document.getElementById("blue").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("blue").style.backgroundColor = "lightcoral";
    }
    
    if (roheline == "roheline") {
        document.getElementById("green").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("green").style.backgroundColor = "lightcoral";
    }
    if (kollane == "kollane") {
        document.getElementById("yellow").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("yellow").style.backgroundColor = "lightcoral";
    }
    if (pruun == "pruun") {
        document.getElementById("brown").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("brown").style.backgroundColor = "lightcoral";
    }
    if (lilla == "lilla") {
        document.getElementById("purple").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("purple").style.backgroundColor = "lightcoral";
    }
}

function numbers() {
    one = document.getElementById("one").value;
    üks = one.toLowerCase()
    two = document.getElementById("two").value;
    kaks = two.toLowerCase()
    three = document.getElementById("three").value;
    kolm = three.toLowerCase()
    four = document.getElementById("four").value;
    neli = four.toLowerCase()
    five = document.getElementById("five").value;
    viis = five.toLowerCase()
    
    six = document.getElementById("six").value;
    kuus = six.toLowerCase()
    seven = document.getElementById("seven").value;
    seitse = seven.toLowerCase()
    eight = document.getElementById("eight").value;
    kaheksa = eight.toLowerCase()
    nine = document.getElementById("nine").value;
    üheksa = nine.toLowerCase()
    ten = document.getElementById("ten").value;
    kümme = ten.toLowerCase()
    
    if (üks == "üks") {
        document.getElementById("one").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("one").style.backgroundColor = "lightcoral";
    }
    if (kaks == "kaks") {
        document.getElementById("two").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("two").style.backgroundColor = "lightcoral";
    }
    if (kolm == "kolm") {
        document.getElementById("three").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("three").style.backgroundColor = "lightcoral";
    }
    if (neli == "neli") {
        document.getElementById("four").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("four").style.backgroundColor = "lightcoral";
    }
    if (viis == "viis") {
        document.getElementById("five").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("five").style.backgroundColor = "lightcoral";
    }
    if (kuus == "kuus") {
        document.getElementById("six").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("six").style.backgroundColor = "lightcoral";
    }
    if (seitse == "seitse") {
        document.getElementById("seven").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("seven").style.backgroundColor = "lightcoral";
    }
    if (kaheksa == "kaheksa") {
        document.getElementById("eight").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("eight").style.backgroundColor = "lightcoral";
    }
    if (üheksa == "üheksa") {
        document.getElementById("nine").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("nine").style.backgroundColor = "lightcoral";
    }
    if (kümme == "kümme") {
        document.getElementById("ten").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("ten").style.backgroundColor = "lightcoral";
    }
}



function days() {
    monday = document.getElementById("monday").value;
    esmaspäev = monday.toLowerCase()
    tuesday = document.getElementById("tuesday").value;
    teisipäev = tuesday.toLowerCase()
    wednesday = document.getElementById("wednesday").value;
    kolmapäev = wednesday.toLowerCase()
    thursday = document.getElementById("thursday").value;
    neljapäev = thursday.toLowerCase()
    friday = document.getElementById("friday").value;
    reede = friday.toLowerCase()
    saturday = document.getElementById("saturday").value;
    laupäev = saturday.toLowerCase()
    sunday = document.getElementById("sunday").value;
    pühapäev = sunday.toLowerCase()
    
    if (esmaspäev == "esmaspäev") {
        document.getElementById("monday").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("monday").style.backgroundColor = "lightcoral";
    }
    if (teisipäev == "teisipäev") {
        document.getElementById("tuesday").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("tuesday").style.backgroundColor = "lightcoral";
    }
    if (kolmapäev == "kolmapäev") {
        document.getElementById("wednesday").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("wednesday").style.backgroundColor = "lightcoral";
    }
    if (neljapäev == "neljapäev") {
        document.getElementById("thurday").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("thursday").style.backgroundColor = "lightcoral";
    }
    if (reede == "reede") {
        document.getElementById("friday").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("friday").style.backgroundColor = "lightcoral";
    }
    if (laupäev == "laupäev") {
        document.getElementById("saturday").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("saturday").style.backgroundColor = "lightcoral";
    }
    if (pühapäev == "pühapäev") {
        document.getElementById("sunday").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("sunday").style.backgroundColor = "lightcoral";
    }
}



function months() {
    january = document.getElementById("january").value;
    jaanuar = january.toLowerCase()
    february = document.getElementById("february").value;
    veebruar = february.toLowerCase()
    march = document.getElementById("march").value;
    märts = march.toLowerCase()
    april = document.getElementById("april").value;
    aprill = april.toLowerCase()
    may = document.getElementById("may").value;
    mai = may.toLowerCase()
    june = document.getElementById("june").value;
    juuni = june.toLowerCase()
    
    july = document.getElementById("july").value;
    juuli = july.toLowerCase()
    august = document.getElementById("august").value;
    august = august.toLowerCase()
    september = document.getElementById("september").value;
    september = september.toLowerCase()
    october = document.getElementById("october").value;
    oktoober = october.toLowerCase()
    november = document.getElementById("november").value;
    november = november.toLowerCase()
    december = document.getElementById("december").value;
    detsember = december.toLowerCase()
    
    if (jaanuar == "jaanuar") {
        document.getElementById("january").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("january").style.backgroundColor = "lightcoral";
    }
    if (veebruar == "veebruar") {
        document.getElementById("february").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("february").style.backgroundColor = "lightcoral";
    }
    if (märts == "märts") {
        document.getElementById("march").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("march").style.backgroundColor = "lightcoral";
    }
    if (aprill == "aprill") {
        document.getElementById("april").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("april").style.backgroundColor = "lightcoral";
    }
    if (mai == "mai") {
        document.getElementById("may").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("may").style.backgroundColor = "lightcoral";
    }
    if (juuni == "juuni") {
        document.getElementById("june").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("june").style.backgroundColor = "lightcoral";
    }
    if (juuli == "juuli") {
        document.getElementById("july").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("july").style.backgroundColor = "lightcoral";
    }
    if (august == "august") {
        document.getElementById("august").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("august").style.backgroundColor = "lightcoral";
    }
    if (september == "september") {
        document.getElementById("september").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("september").style.backgroundColor = "lightcoral";
    }
    if (oktoober == "oktoober") {
        document.getElementById("october").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("october").style.backgroundColor = "lightcoral";
    }
    if (november == "november") {
        document.getElementById("november").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("november").style.backgroundColor = "lightcoral";
    }
    if (detsember == "detsember") {
        document.getElementById("december").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("december").style.backgroundColor = "lightcoral";
    }
}



function human() {
    head = document.getElementById("head").value;
    pea = head.toLowerCase()
    hand = document.getElementById("hand").value;
    käsi = hand.toLowerCase()
    leg = document.getElementById("leg").value;
    jalg = leg.toLowerCase()
    mouth = document.getElementById("mouth").value;
    suu = mouth.toLowerCase()
    nose = document.getElementById("nose").value;
    nina = nose.toLowerCase()
    ear = document.getElementById("ear").value;
    kõrv = ear.toLowerCase()
    
    knee = document.getElementById("knee").value;
    põlv = knee.toLowerCase()
    finger = document.getElementById("finger").value;
    sõrm = finger.toLowerCase()
    tongue = document.getElementById("tongue").value;
    keel = tongue.toLowerCase()
    hair = document.getElementById("hair").value;
    juuksed = hair.toLowerCase()
    chest = document.getElementById("chest").value;
    rind = chest.toLowerCase()
    back = document.getElementById("back").value;
    selg = back.toLowerCase()
    
    if (pea == "pea") {
        document.getElementById("head").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("head").style.backgroundColor = "lightcoral";
    }
    if (käsi == "käsi") {
        document.getElementById("hand").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("hand").style.backgroundColor = "lightcoral";
    }
    if (jalg == "jalg") {
        document.getElementById("leg").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("leg").style.backgroundColor = "lightcoral";
    }
    if (suu == "suu") {
        document.getElementById("mouth").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("mouth").style.backgroundColor = "lightcoral";
    }
    if (nina == "nina") {
        document.getElementById("nose").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("nose").style.backgroundColor = "lightcoral";
    }
    if (kõrv == "kõrv") {
        document.getElementById("ear").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("ear").style.backgroundColor = "lightcoral";
    }
    if (põlv == "põlv") {
        document.getElementById("knee").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("knee").style.backgroundColor = "lightcoral";
    }
    if (sõrm == "sõrm") {
        document.getElementById("finger").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("finger").style.backgroundColor = "lightcoral";
    }
    if (keel == "keel") {
        document.getElementById("tongue").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("tongue").style.backgroundColor = "lightcoral";
    }
    if (juuksed == "juuksed") {
        document.getElementById("hair").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("hair").style.backgroundColor = "lightcoral";
    }
    if (rind == "rind") {
        document.getElementById("chest").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("chest").style.backgroundColor = "lightcoral";
    }
    if (selg == "selg") {
        document.getElementById("chest").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("chest").style.backgroundColor = "lightcoral";
    }
}



function kitchen() {
    sink = document.getElementById("sink").value;
    kraanikauss = sink.toLowerCase()
    plate = document.getElementById("plate").value;
    taldrik = plate.toLowerCase()
    bowl = document.getElementById("bowl").value;
    kauss = bowl.toLowerCase()
    glass = document.getElementById("glass").value;
    klaas = glass.toLowerCase()
    cup = document.getElementById("cup").value;
    tass = cup.toLowerCase()
    fridge = document.getElementById("fridge").value;
    külmkapp = fridge.toLowerCase()
    
    knife = document.getElementById("knife").value;
    nuga = knife.toLowerCase()
    fork = document.getElementById("fork").value;
    kahvel = fork.toLowerCase()
    spoon = document.getElementById("spoon").value;
    lusikas = spoon.toLowerCase()
    oven = document.getElementById("oven").value;
    ahi = oven.toLowerCase()
    stove = document.getElementById("stove").value;
    pliit = stove.toLowerCase()
    sponge = document.getElementById("sponge").value;
    käsn = sponge.toLowerCase()
    
    if (kraanikauss == "kraanikauss") {
        document.getElementById("sink").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("sink").style.backgroundColor = "lightcoral";
    }
    if (taldrik == "taldrik") {
        document.getElementById("plate").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("plate").style.backgroundColor = "lightcoral";
    }
    if (kauss == "kauss") {
        document.getElementById("bowl").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("bowl").style.backgroundColor = "lightcoral";
    }
    if (klaas == "klaas") {
        document.getElementById("glass").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("glass").style.backgroundColor = "lightcoral";
    }
    if (tass == "tass") {
        document.getElementById("cup").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("cup").style.backgroundColor = "lightcoral";
    }
    if (külmkapp == "külmkapp") {
        document.getElementById("fridge").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("fridge").style.backgroundColor = "lightcoral";
    }
    if (nuga == "nuga") {
        document.getElementById("knife").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("knife").style.backgroundColor = "lightcoral";
    }
    if (kahvel == "kahvel") {
        document.getElementById("fork").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("fork").style.backgroundColor = "lightcoral";
    }
    if (lusikas == "lusikas") {
        document.getElementById("spoon").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("spoon").style.backgroundColor = "lightcoral";
    }
    if (ahi == "ahi") {
        document.getElementById("oven").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("oven").style.backgroundColor = "lightcoral";
    }
    if (pliit == "pliit") {
        document.getElementById("stove").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("stove").style.backgroundColor = "lightcoral";
    }
    if (käsn == "käsn") {
        document.getElementById("sponge").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("sponge").style.backgroundColor = "lightcoral";
    }
}