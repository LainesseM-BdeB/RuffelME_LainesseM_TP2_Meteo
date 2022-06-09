```
La classe Meteo est un objet qui représente la météo d'une journée
_day = Date du jour
_temp = température actuelle(moyenne)
_minTemp = température minimum
_maxTemp = température maximum

Il est à évaluer la nécéssité de la classe pour le bon roulement de la page web
```
class Meteo {

    constructor(day, temp, minTemp, maxTemp) {
        this._day = day;
        this._temp = temp;
        this._minTemp = minTemp;
        this._maxTemp = maxTemp;
    }

    get day() {
        return this._day;
    }

    get temp() {
        return this._temp;
    }

    get minTemp() {
        return this._minTemp;
    }

    get maxTemp() {
        return this._maxTemp;
    }
}