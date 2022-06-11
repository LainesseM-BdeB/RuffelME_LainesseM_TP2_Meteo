//Exemple de creation d'objet Meteo -> test = new Meteo("01-01-2020", "-15", "-25", "-10")
const fullMeteoData = new Map();

let app_div = document.getElementById("app");
<<<<<<< HEAD
let app_div2 = document.getElementById("app2");

window.onload = function() {
=======

window.onload = function () {
>>>>>>> 6a88ee57859b08309b481c34f681ce077fd9a8f8
    parseMeteo();
};

document.querySelector("#jours7").addEventListener("click", (e) => {
    console.log(e.target.id);
});
document.querySelector("#jours14").addEventListener("click", (e) => {
    console.log(e.target.id);
});
document.querySelector("#mensuel").addEventListener("click", (e) => {
    console.log(e.target.id);
});

<<<<<<< HEAD

//Permet de choisir quelle template que l'on veut lors de la creation des fonctions(N.B. a choisir selon l'ordre de creation dans le .html)
function TempSelect(whichTemp) { 
=======
function TempSelect(whichTemp) {
>>>>>>> 6a88ee57859b08309b481c34f681ce077fd9a8f8
    let template;
    return (template = document.getElementsByTagName("template")[whichTemp]);
}

<<<<<<< HEAD
//Fonction afficher le 3 jours
function Pred3(){
    clearBox("app");
=======
function pred3() {
    clearBox();
>>>>>>> 6a88ee57859b08309b481c34f681ce077fd9a8f8
    let clon = TempSelect(0).content.cloneNode(true);
    app_div.appendChild(clon);
}
<<<<<<< HEAD
//Fonction afficher le 7 jours
function Pred7(){

    clearBox("app");
    let clon = TempSelect(1).content.cloneNode(true);
    app_div.appendChild(clon);
   
  

}


//Fonction afficher le 14 jours
function Pred14(){

    clearBox("app"); 
=======
function pred7() {
    clearBox();
    let clon = TempSelect(1).content.cloneNode(true);
    app_div.appendChild(clon);
}

function pred14() {
    clearBox();
>>>>>>> 6a88ee57859b08309b481c34f681ce077fd9a8f8
    let clon = TempSelect(2).content.cloneNode(true);
    app_div.appendChild(clon);
}

<<<<<<< HEAD
//Fonction afficher le  Mois
function PredMensuel(){

    clearBox("app");
=======
function predMensuel() {
    clearBox();
>>>>>>> 6a88ee57859b08309b481c34f681ce077fd9a8f8
    let clon = TempSelect(3).content.cloneNode(true);
    app_div.appendChild(clon);
}

<<<<<<< HEAD


//Permet d'effacer le div ayant le clone du template
function clearBox(toDelete) {
  
    let deleter = document.getElementById(toDelete);
    while(deleter.firstChild) {
        deleter.removeChild(deleter.firstChild);
    }
}


// template pour les cases  ,faire le mois , 
=======
function ImageRandomizer() {}

function clearBox() {
    while (app_div.firstChild) {
        app_div.removeChild(app_div.firstChild);
    }
}
>>>>>>> 6a88ee57859b08309b481c34f681ce077fd9a8f8
