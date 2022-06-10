function parseMeteo() {

    fetch("../ressources/data/temperatures_2022.json")
        .then(response => {
            return response.json();
        })
        .then(jsondata => {
            for (const data of jsondata.temperatures) {
                let a = new Meteo(data.DateDuJour, data.Temp, data.MinTemp, data.MaxTemp)
                fullMeteoData.set(data.DateDuJour, a)
            }
        })

}