// excercie1
//nombre
const age = 25
//chaine de caractère
const nom = "Geovana Tapia"
//boolean
const estAlternant = true;
//tableau
const instrumentsMusique = ["guitarre", "basse", "accordéon"];
//objet
const voiture = {
    moteur: "essence", 
    roues: 4,
};

//Exercice 2
function afficherSigne(nombre) {
    if(nombre > 0) {
        console.log("le nombre est positif");
    }else {
        console.log("Le nombre est négatif");
    }
}

const nombres = [1, 5, 10, -2, 8 ];
for( let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}


let index = 0;
while(index < nombres.length){
    if(nombres [index] % 2 === 0){
        console.log(nombres[index]);
    }
    index++;
}

//Exercice 3
function addition(a, b){
    return a + b; 
}

function afficherMessage(nom){
    console.log('Bonjour ${nom} !');
}

//exercice 4 -5
const message = document.getElementById("message");
const boutonExercice4 = document.getElementById("boutonExercice4");

boutonExercice4.addEventListener("click", () => {
    message.textContent = "le bouton a été cliqué"; 
}); 

//exercice 6 
const boutonExercice6 = document.getElementById("boutonExercice6")

boutonExercice6.addEventListener("click", () =>{
    const informationSuplementaire = document.createElement("p");
    informationSuplementaire.textContent = "Ceci est un pragraphe de détailes suplemmentaires surle sujet";
    document.getElementById("exercice6").appendChild(informationSuplementaire);
})