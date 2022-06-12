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

function fillMeteo(range, date, mensuel = false) {
    let i = 0;
    let day = new Date(date);
    if (mensuel) {
        day.setDate(0);
    }
    for (const box in range) {
        createDay(fullMeteoData.get(day.toISOString().slice(0, 10)));
        day.setDate(day.getDate() + 1);
    }
}

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

function createDay(day) {
    const dayFrame = document.createElement("div");
    dayFrame.classList.add("dayFrame");
    const row1 = document.createElement("div");
    row1.classList.add("dayFrameRow");
    const row2 = document.createElement("div");
    row2.classList.add("dayFrameRow");
    const weatherFrame = document.createElement("div");
    weatherFrame.classList.add("weatherFrame");
    const weatherImg = document.createElement("img");
    weatherImg.src = "../ressources/img/" + findWeather(day.temp);
    weatherImg.classList.add("weatherImg");
    const tempFrame = document.createElement("div");
    tempFrame.classList.add("tempFrame");
    const tempData = document.createElement("p");
    tempData.innerHTML = day.temp + "°C";
    const dateFrame = document.createElement("div");
    dateFrame.classList.add("dateFrame");
    const dateData = document.createElement("p");
    const day2 = day.getDay.split("-");
    dateData.innerText = day2[2] + "\n" + day2[1] + "\n" + day2[0];
    const minMaxFrame = document.createElement("div");
    minMaxFrame.classList.add("minMaxFrame");
    const minFrame = document.createElement("div");
    const minTemp = document.createElement("p");
    minTemp.classList.add("minMaxTemp");
    minTemp.innerHTML = "min: " + day.minTemp + "°C";
    const maxFrame = document.createElement("div");
    const maxTemp = document.createElement("p");
    maxTemp.classList.add("minMaxTemp");
    maxTemp.innerHTML = "max: " + day.maxTemp + "°C";

    weatherFrame.appendChild(weatherImg);
    tempFrame.appendChild(tempData);
    dateFrame.appendChild(dateData);
    minFrame.appendChild(minTemp);
    maxFrame.appendChild(maxTemp);
    minMaxFrame.appendChild(minFrame);
    minMaxFrame.appendChild(maxFrame);
    row1.appendChild(weatherFrame);
    row1.appendChild(tempFrame);
    row2.appendChild(dateFrame);
    row2.appendChild(minMaxFrame);
    dayFrame.appendChild(row1);
    dayFrame.appendChild(row2);

    document.body.appendChild(dayFrame);
}
