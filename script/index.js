//Exemple de creation d'objet Meteo -> test = new Meteo("01-01-2020", "-15", "-25", "-10")
const fullMeteoData = new Map();

window.onload = function() {
    parseMeteo();
};

let routes = {};
let templates = {};

let app_div = document.getElementById("app");


function home() {

    let div = document.createElement('div');
    let link = document.createElement('a');
    link.href = '#/about';
    link.innerText = 'About';

    div.innerHTML = '<h1 align = "Center">Home</h1>';

    div.appendChild(link);

    app_div.appendChild(div);
}

function about() {
    let div = document.createElement('div');
    let link = document.createElement('a');
    link.href = '#/';
    link.innerText = 'Home';

    div.append = '<h3>About</h3>';
    div.appendChild(link);

    app_div.appendChild(div);
}

function route(path, template) {
    if (typeof template === 'function') {
        return routes[path] = template;
    } else if (typeof template === 'string') {
        return routes[path] = templates[template];
    } else {
        return;
    }

}

function template(name, templateFunction) {
    return templates[name] = templateFunction;
}

template('home', function () {
    home();
});

template('about', function () {
    about();
});
route('/', 'home');
route('/about', 'about');

function resolveRoute(route) {
    try {
        return routes[route];
    } catch (e) {
        throw new Error(`Route ${route} not found`);
    }

}

function router(evt) {
    let url = window.location.hash.slice(1) || '/';
    let route = resolveRoute(url);

    route();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
