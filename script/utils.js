function parseMeteo() {
    fetch("../ressources/data/temperatures_2022.json")
        .then((response) => {
            return response.json();
        })
        .then((jsondata) => {
            for (const data of jsondata.temperatures) {
                let a = new Meteo(
                    data.DateDuJour,
                    data.Temp,
                    data.MinTemp,
                    data.MaxTemp
                );
                fullMeteoData.set(data.DateDuJour, a);
            }
        });
}

function findWeather(temp) {
    let weather;
    if (temp <= 0) {
        weather = "icon-neige.png";
    } else if (temp <= 10) {
        weather = "icon-pluie.png";
    } else if (temp <= 20) {
        weather = "./ressources/img/icon-nuage.png";
    } else {
        weather = "./ressources/img/icon.soleil.png";
    }
    return weather;
}


let tempToSwap = document.getElementById("tempToSwap");

function CreateImage(weather) {
    let images = document.getElementById("image");
    let img = document.createElement("img");
    img.setAttribute("src", weather);
    images.appendChild(img);
    return false;
  }

function swap() { 


    
    CreateImage(findWeather(20));

}

function selectMonth(month) {
    let meteoMonth;
    let fullMeteoDataValues = fullMeteoData.values();
    switch (month) {
        case 1:
            meteoMonth = Array.from(fullMeteoDataValues).slice(0, 31);
            break;
        case 2:
            meteoMonth = Array.from(fullMeteoDataValues).slice(31, 59);
            break;
        case 3:
            meteoMonth = Array.from(fullMeteoDataValues).slice(59, 90);
            break;
        case 4:
            meteoMonth = Array.from(fullMeteoDataValues).slice(90, 120);
            break;
        case 5:
            meteoMonth = Array.from(fullMeteoDataValues).slice(120, 151);
            break;
        case 6:
            meteoMonth = Array.from(fullMeteoDataValues).slice(151, 181);
            break;
        case 7:
            meteoMonth = Array.from(fullMeteoDataValues).slice(181, 212);
            break;
        case 8:
            meteoMonth = Array.from(fullMeteoDataValues).slice(212, 243);
            break;
        case 9:
            meteoMonth = Array.from(fullMeteoDataValues).slice(243, 273);
            break;
        case 10:
            meteoMonth = Array.from(fullMeteoDataValues).slice(273, 304);
            break;
        case 11:
            meteoMonth = Array.from(fullMeteoDataValues).slice(304, 334);
            break;
        case 12:
            meteoMonth = Array.from(fullMeteoDataValues).slice(334, 365);
            break;
    }
    return meteoMonth;
}

function test() {
    let data = selectMonth(2);
    let x = 0;
    for (let day of data) {
        let temp = day.temp;
        console.log(++x + "/" + data.length);
        console.log(temp + "°C -> " + findWeather(temp));
    }
}
