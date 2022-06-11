//Exemple de creation d'objet Meteo -> test = new Meteo("01-01-2020", "-15", "-25", "-10")
const fullMeteoData = new Map();

let app_div = document.getElementById("app");


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


function TempSelect(whichTemp) { 
    let template;
    return template = document.getElementsByTagName("template")[whichTemp];
}

function pred3(){
    clearBox();
    let clon = TempSelect(0).content.cloneNode(true);
    app_div.appendChild(clon);

}
function pred7(){

    clearBox();
    let clon = TempSelect(1).content.cloneNode(true);
    app_div.appendChild(clon);

}

function pred14(){

    clearBox();
    let clon = TempSelect(2).content.cloneNode(true);
    app_div.appendChild(clon);

}


function predMensuel(){

    clearBox();
    let clon = TempSelect(3).content.cloneNode(true);
    app_div.appendChild(clon);

}

function ImageRandomizer() { 
    


}

function clearBox() {
  
    while(app_div.firstChild) {
        app_div.removeChild(app_div.firstChild);
    }
}


