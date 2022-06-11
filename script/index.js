//Exemple de creation d'objet Meteo -> test = new Meteo("01-01-2020", "-15", "-25", "-10")
const fullMeteoData = new Map();

let app_div = document.getElementById("app");
let app_div2 = document.getElementById("app2");

window.onload = function() {
    parseMeteo();
};

document.querySelector("#jours7").addEventListener("click", e => {
    console.log(e.target.id)
})
document.querySelector("#jours14").addEventListener("click", e => {
    console.log(e.target.id)
})
document.querySelector("#mensuel").addEventListener("click", e => {
    console.log(e.target.id)
})


//Permet de choisir quelle template que l'on veut lors de la creation des fonctions(N.B. a choisir selon l'ordre de creation dans le .html)
function TempSelect(whichTemp) { 
    let template;
    return template = document.getElementsByTagName("template")[whichTemp];
}

//Fonction afficher le 3 jours
function Pred3(){
    clearBox("app");
    let clon = TempSelect(0).content.cloneNode(true);
    app_div.appendChild(clon);

}
//Fonction afficher le 7 jours
function Pred7(){

    clearBox("app");
    let clon = TempSelect(1).content.cloneNode(true);
    app_div.appendChild(clon);
   
  

}


//Fonction afficher le 14 jours
function Pred14(){

    clearBox("app"); 
    let clon = TempSelect(2).content.cloneNode(true);
    app_div.appendChild(clon);

}

//Fonction afficher le  Mois
function PredMensuel(){

    clearBox("app");
    let clon = TempSelect(3).content.cloneNode(true);
    app_div.appendChild(clon);

}



//Permet d'effacer le div ayant le clone du template
function clearBox(toDelete) {
  
    let deleter = document.getElementById(toDelete);
    while(deleter.firstChild) {
        deleter.removeChild(deleter.firstChild);
    }
}


// template pour les cases  ,faire le mois , 