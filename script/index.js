//Exemple de creation d'objet Meteo -> test = new Meteo("01-01-2020", "-15", "-25", "-10")
const fullMeteoData = new Map();

document.querySelector("#submitVille").addEventListener("click", (evt) => {
    evt.preventDefault();
    //Do what you want
    Pred3();
    ChangeCityText();
 
});



function ChangeCityText() {
    let cityValue = document.getElementById("ville").value;
    let cityName = document.getElementById("CityName");
    cityName.innerHTML = cityValue;
}

let pred = document.getElementById("prediction");

window.onload = function () {
    parseMeteo();
};

document.querySelector("#submitVille").addEventListener("click", (evt) => {
    evt.preventDefault();
    //Do what you want
});

document.querySelector("#jours7").addEventListener("click", (e) => {
    console.log(e.target.id);
});
document.querySelector("#jours14").addEventListener("click", (e) => {
    console.log(e.target.id);
});
document.querySelector("#mensuel").addEventListener("click", (e) => {
    console.log(e.target.id);
});

function findWeather(temp) {
    let weather;
    if (temp <= 0) {
        weather = "icon-neige.png";
    } else if (temp <= 10) {
        weather = "icon-pluie.png";
    } else if (temp <= 20) {
        weather = "icon-nuage.png";
    } else {
        weather = "icon-soleil.png";
    }
    return weather;
}

//Permet de choisir quelle template que l'on veut lors de la creation des fonctions(N.B. a choisir selon l'ordre de creation dans le .html)
function TempSelect(whichTemp) {
    let template;
    return (template = document.getElementsByTagName("template")[whichTemp]);
}

//Fonction afficher le 3 jours
function Pred3() {
    clearBox();
    let clon = TempSelect(0).content.cloneNode(true);
    pred.appendChild(clon);
    let range = document.querySelectorAll(".JJ");
    fillMeteo(range, Date.now());

}
function Pred7() {
    clearBox();
    let clon = TempSelect(1).content.cloneNode(true);
    pred.appendChild(clon);
    let range = document.querySelectorAll(".J7");
    fillMeteo(range, Date.now());
}

function Pred14() {
    clearBox();
    let clon = TempSelect(2).content.cloneNode(true);
    pred.appendChild(clon);
    let range = document.querySelectorAll(".J14");
    fillMeteo(range, Date.now());
}

//Fonction afficher le  Mois
function PredMensuel(mois) {
    clearBox();
    let clon = TempSelect(3).content.cloneNode(true);
    pred.appendChild(clon);
    let range = document.querySelectorAll(".Mensu");
    fillMeteo(range, mois, true);
    //    let tempDate = new Date(Date.now()).toLocaleString("fr-ca", {
    //        month: "long",
    //    });
    //    tempDate = tempDate.charAt(0).toUpperCase() + tempDate.slice(1);
    //   document.querySelector("#calendar").innerHTML = tempDate;
}

//Permet d'effacer le div ayant le clone du template
function clearBox(toDelete) {
    let deleter = document.getElementById(toDelete);
    while (deleter.firstChild) {
        deleter.removeChild(deleter.firstChild);
    }
}

function clearBox() {
    while (pred.firstChild) {
        pred.removeChild(pred.firstChild);
    }
}
