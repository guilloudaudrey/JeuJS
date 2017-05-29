let a;
let b;
let c = a + b;

let submit = document.querySelector(".inputsubmit");
let submit1 = document.querySelector(".inputsubmit1");
let submit2 = document.querySelector(".inputsubmit2");
let submit3 = document.querySelector(".inputsubmit3");

let bouton1 = document.querySelector(".bouton1");
let bouton2 = document.querySelector(".bouton2");
let bouton3 = document.querySelector(".bouton3");
let bouton4 = document.querySelector(".bouton4");
let bouton5 = document.querySelector(".bouton5");
let bouton6 = document.querySelector(".bouton6");

let jauge1 = document.querySelector("#avancement");
let jauge2 = document.querySelector("#avancement1");

let buttonbox = document.querySelector(".buttonbox");
let buttonbox2 = document.querySelector(".buttonbox2");
let buttonbox1 = document.querySelector(".buttonbox1");

let gameover = document.querySelector(".gameover");
// ----------------------------objets
"use strict";

let jeu = {
    turn: 0
};

let perso1 = {
    name: "A",
    energie: 5,
    vies: 0,
    points: 0,
}

let perso2 = {
    name: "B",
    energie: 5,
    vies: 0,
    points: 0,
}

//----------------------changer de joueur

function changeJoueur() {

    if (jeu.turn % 2 === 0) {
        buttonbox2.style.display = "none";
        buttonbox1.style.display = "flex";
    } else {
        buttonbox2.style.display = "flex";
        buttonbox1.style.display = "none";
    }
}

/*---------------------------actions ordi

function ComputerTurn() {
    let i = Math.floor(Math.random() * 3) + 1;
    if (i === 1) {
        uppercut(perso1);
        animUppercutPerso2();
        animCoupPerso1();
        finDeManche(perso1, perso2);
        finDeManche(perso2, perso1);
    }

    if (i === 2) {
        crochet(perso1);
        animCrochetPerso2();
        animCoupPerso1();
        finDeManche(perso1, perso2);
        finDeManche(perso2, perso1);
    }

    if (i === 2) {
        direct(perso1);
        animDirectPerso2();
        animCoupPerso1();
        finDeManche(perso1, perso2);
        finDeManche(perso2, perso1);
    }
}*/

//---------------------------ajouter tour

function addTurn() {
    jeu.turn = jeu.turn + 1;
}

//-----------------------------attaques

function uppercut(cible) {
    if (cible.energie > 0) {
        cible.energie = cible.energie - 1;
    } else {
        cible.vies = cible.vies - 1;
        cible.energie = 5;
    }
}

function direct(cible) {
    if (cible.energie >= 4) {
        cible.energie = cible.energie - 4;
    } else {
        cible.vies = cible.vies - 1;
        cible.energie = 5;
    }
}

function crochet(cible) {
    if (cible.energie >= 2) {
        cible.energie = cible.energie - 2;
    } else {
        cible.vies = cible.vies - 1;
        cible.energie = 5;
    }
}

//----------------------------afficher énergie et vies 

function afficherEV() {
    let pointsener1 = document.querySelector(".compteurener1");
    pointsener1.innerHTML = perso1.energie;
    let pointsvies1 = document.querySelector(".compteurvies1");
    pointsvies1.innerHTML = perso1.vies;
    let pointsener2 = document.querySelector(".compteurener2");
    pointsener2.innerHTML = perso2.energie;
    let pointsvies2 = document.querySelector(".compteurvies2");
    pointsvies2.innerHTML = perso2.vies;
}

//--------------------------Progression de la jauge
function jauge(elem, valeur) {
    elem.value = elem.value - valeur;
}

//----------------------------Réinitialisation de la jauge
function jaugeReinitial(elem, elem1) {
    elem.value = 5;
    elem1.value = 5;
}

// -----------------------------ajouter points

function points(personnage) {
    personnage.points = personnage.points + 1;
}

//------------------ afficher points des joueurs

function afficherPoints() {
    let pointJ1 = document.querySelector(".compteurJ1");
    pointJ1.innerHTML = perso1.points;
    let pointJ2 = document.querySelector(".compteurJ2");
    pointJ2.innerHTML = perso2.points;
}
//-----------------réinitialiser l'énergie et les vies

function reinitialiser() {
    perso1.energie = 5;
    perso1.vies = 0;
    perso2.energie = 5;
    perso2.vies = 0;
}

//------------------------- Fin de Manche

function finDeManche(personnage, cible) {
    if (cible.vies < 0) {
        points(personnage);
        addTurn();
        reinitialiser();
        jaugeReinitial(jauge1, jauge2);
        afficherEV();
        changeJoueur();

    }
}

//------------------------Gameover

function gameOver() {
    if ((perso1.points === 1) || (perso2.points === 1)) {
        let ring = document.querySelector(".ring");
        ring.style.display = "none";
        buttonbox.style.display = "none";
        gameover.style.display = "block";
    }
}

//------------------------ Réinitialise la question et le champs de saisie


function reinitialiserQuestion() {
    let question = document.querySelector(".question1");
    question.innerHTML = "";
    let reponse = document.querySelector(".inputtext");
    reponse.value = "";
}


//--------------------------------- animations perso 1

function animUppercutPerso1() {
    let personnage1 = document.querySelector(".perso1");
    let classes = personnage1.className;
    personnage1.classList.add("perso1upper");
    personnage1.addEventListener('animationend', function() {
        personnage1.className = classes;
    })
}

function animCrochetPerso1() {
    let personnage1 = document.querySelector(".perso1");
    let classes = personnage1.className;
    personnage1.classList.add("perso1crochet");
    personnage1.addEventListener('animationend', function() {
        personnage1.className = classes;
    })
}

function animDirectPerso1() {
    let personnage1 = document.querySelector(".perso1");
    let classes = personnage1.className;
    personnage1.classList.add("perso1direct");
    personnage1.addEventListener('animationend', function() {
        personnage1.className = classes;
    })
}

function animFeintePerso1() {
    let personnage1 = document.querySelector(".perso1");
    let classes = personnage1.className;
    personnage1.classList.add("perso1feinte");
    personnage1.addEventListener('animationend', function() {
        personnage1.className = classes;
    })
}

function animCoupPerso1() {
    let personnage1 = document.querySelector(".perso1");
    let classes = personnage1.className;
    personnage1.classList.add("perso1coup");
    personnage1.addEventListener('animationend', function() {
        personnage1.className = classes;
    })
}

function animFaintPerso() {
    let personnage1 = document.querySelector(".perso1");
    let classes = personnage1.className;
    personnage1.classList.add("boxerfaint");
    personnage1.addEventListener('animationend', function() {
        personnage1.className = classes;
    })
}

//---------------------------animations perso 2

function animUppercutPerso2() {
    let personnage2 = document.querySelector(".perso2");
    let classes = personnage2.className;
    personnage2.classList.add("perso2upper");
    personnage2.addEventListener('animationend', function() {
        personnage2.className = classes;
    })

}

function animCrochetPerso2() {
    let personnage2 = document.querySelector(".perso2");
    let classes = personnage2.className;
    personnage2.classList.add("perso2crochet");
    personnage2.addEventListener('animationend', function() {
        personnage2.className = classes;
    })

}

function animDirectPerso2() {
    let personnage2 = document.querySelector(".perso2");
    let classes = personnage2.className;
    personnage2.classList.add("perso2direct");
    personnage2.addEventListener('animationend', function() {
        personnage2.className = classes;
    })
}

function animFeintePerso2() {
    let personnage2 = document.querySelector(".perso2");
    let classes = personnage2.className;
    personnage2.classList.add("perso2feinte");
    personnage2.addEventListener('animationend', function() {
        personnage2.className = classes;
    })
}

function animCoupPerso2() {
    let personnage2 = document.querySelector(".perso2");
    let classes = personnage2.className;
    personnage2.classList.add("perso2coup");
    personnage2.addEventListener('animationend', function() {
        personnage2.className = classes;
    })
}

function animFaintPerso2() {
    let personnage2 = document.querySelector(".perso2");
    let classes = personnage2.className;
    personnage2.classList.add("perso2faint");
    personnage2.addEventListener('animationend', function() {
        personnage2.className = classes;
    })
}



//----------------------------------- événements

afficherEV();
afficherEV();
changeJoueur();

//-------------------------------event bouton submit1

submit1.addEventListener("click", function() {
    compareQuestion1();
    reinitialiserQuestion();
    afficherEV();
    afficherPoints();
    addTurn();
    changeJoueur();
    gameOver();
    submit1.style.display = "none";
    submit.style.display = "block";

})

//--------------------------------event bouton submit2

submit2.addEventListener("click", function() {
    compareQuestion2();
    reinitialiserQuestion();
    afficherEV();
    afficherPoints();
    addTurn();
    changeJoueur();
    gameOver();
    submit2.style.display = "none";
    submit.style.display = "block";
})

//---------------------------------event bouton submit3

submit3.addEventListener("click", function() {
    comparerQuestion3();
    reinitialiserQuestion();
    afficherEV();
    afficherPoints();
    addTurn();
    changeJoueur();
    gameOver();
    submit3.style.display = "none";
    submit.style.display = "block";
})

// -----------------------------event boutons attaques joueur 1

bouton1.addEventListener("click", function() {
    affichQuestion1();
    submit.style.display = "none"
    submit1.style.display = "block";
    submit2.style.display = "none";
    submit3.style.display = "none";

})

bouton2.addEventListener("click", function() {
    affichQuestion2();
    submit.style.display = "none";
    submit1.style.display = "none";
    submit2.style.display = "block";
    submit3.style.display = "none";

})

bouton3.addEventListener("click", function() {
    afficherQuestion3();
    submit.style.display = "none";
    submit1.style.display = "none";
    submit2.style.display = "none";
    submit3.style.display = "block";
})

//---------------------------------event boutons attaques joueur 2


bouton4.addEventListener("click", function() {
    affichQuestion1();
    submit.style.display = "none";
    submit1.style.display = "block";
    submit2.style.display = "none";
    submit3.style.display = "none";

})

bouton5.addEventListener("click", function(e) {
    affichQuestion2();
    submit.style.display = "none";
    submit1.style.display = "none";
    submit2.style.display = "block";
    submit3.style.display = "none";
})

bouton6.addEventListener("click", function() {
    afficherQuestion3();
    submit.style.display = "none";
    submit1.style.display = "none";
    submit2.style.display = "none";
    submit3.style.display = "block";
})


//-------------------------Afficher question 1

function affichQuestion1() {
    a = Math.floor(Math.random() * 11);
    b = Math.floor(Math.random() * 11);

    let question = document.querySelector(".question1");
    question.innerHTML = a + " + " + b;
}

//-------------------------Afficher question 2

function affichQuestion2() {
    a = Math.floor(Math.random() * 11);
    b = Math.floor(Math.random() * 11);

    let question = document.querySelector(".question1");
    question.innerHTML = a + " x " + b;
}

//--------------------------Afficher question 3

function afficherQuestion3() {
    a = Math.floor(Math.random() * 11);
    b = Math.floor(Math.random() * 11);

    let question = document.querySelector(".question1");
    question.innerHTML = "(" + a + " x " + b + ")" + " + " + "(" + a + " x " + b + ")";
}

//-------------------------Comparer réponse et solution question 1

function compareQuestion1() {
    let c = a + b;
    let reponse = document.querySelector(".inputtext").value;
    if (jeu.turn % 2 === 0) {
        if (Number(reponse) === c) {
            uppercut(perso2);
            animUppercutPerso1();
            animCoupPerso2();
            jauge(jauge2, 1);
            finDeManche(perso1, perso2);
            finDeManche(perso2, perso1);
        } else {
            animUppercutPerso1();
            animFeintePerso2();
            finDeManche(perso1, perso2);
            finDeManche(perso2, perso1);
        }
    } else {
        if (Number(reponse) === c) {
            uppercut(perso1);
            animUppercutPerso2();
            animCoupPerso1();
            jauge(jauge1, 1);
            finDeManche(perso1, perso2);
            finDeManche(perso2, perso1);
        } else {
            animUppercutPerso2();
            animFeintePerso1();
            finDeManche(perso1, perso2);
            finDeManche(perso2, perso1);
        }
    }
}

//-------------------------Comparer réponse et solution question 2

function compareQuestion2() {
    let c = a * b;
    let reponse = document.querySelector(".inputtext").value;
    if (jeu.turn % 2 === 0) {
        if (Number(reponse) === c) {
            crochet(perso2);
            animCrochetPerso1();
            animCoupPerso2();
            jauge(jauge2, 2);
            finDeManche(perso1, perso2);
            finDeManche(perso2, perso1);
        } else {
            animCrochetPerso1();
            animFeintePerso2();
            finDeManche(perso1, perso2);
            finDeManche(perso2, perso1);
        }
    } else {
        if (Number(reponse) === c) {
            crochet(perso1);
            animCrochetPerso2();
            animCoupPerso1();
            jauge(jauge1, 2);
            finDeManche(perso1, perso2);
            finDeManche(perso2, perso1);
        } else {
            animCrochetPerso2();
            animFeintePerso1();
            finDeManche(perso1, perso2);
            finDeManche(perso2, perso1);
        }

    }
}

//---------------------------- Comparer réponse et solution question 3

function comparerQuestion3() {
    let c = (a * b) + (a * b);

    let reponse = document.querySelector(".inputtext").value;
    if (jeu.turn % 2 === 0) {
        if (Number(reponse) === c) {
            direct(perso2);
            animDirectPerso1();
            animCoupPerso2();
            jauge(jauge2, 4);
            finDeManche(perso1, perso2);
            finDeManche(perso2, perso1);
        } else {
            animDirectPerso1();
            animFeintePerso2();
            finDeManche(perso1, perso2);
            finDeManche(perso2, perso1);
        }
    } else {
        if (Number(reponse) === c) {
            direct(perso1);
            animDirectPerso2();
            animCoupPerso1();
            jauge(jauge1, 4);
            finDeManche(perso1, perso2);
            finDeManche(perso2, perso1);
        } else {
            animDirectPerso2();
            animFeintePerso1();
            finDeManche(perso1, perso2);
            finDeManche(perso2, perso1);
        }


    }
}