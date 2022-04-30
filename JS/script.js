const randomItem = ['cent van jaare 60', 'blauwe schroevendraaier', 'konijnen ooren', 'gele boormachine', 'zwembroek', 'schaatsen', 'afstand bestuurbare auto'];







function randomitemcalc() {
    let index = Math.floor(Math.random() * randomItem.length);
    let item = randomItem[index];
    let naam = randomItem[index]

    document.getElementById('random-item').innerHTML = naam;
}


window.onload = randomitemcalc;