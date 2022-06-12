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
        weather = "icon-nuage.png";
    } else {
        weather = "icon-soleil.png";
    }
    return weather;
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
    console.log(day.getDay);
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
