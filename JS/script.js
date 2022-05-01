const randomItem = ['cent van jaren 60', 'blauwe schroevendraaier', 'konijnen oren', 'gele boormachine',
    'zwembroek', 'schaatsen', 'afstand bestuurbare auto', 'tandenborstel', 'kaasbroodje', 'klok', 'waterpistool',
    'bad eend', 'mok', 'skylander', 'paars papier', 'pyjama', 'kwast type 13', 'pc fan', 'knuffel', 'hawaii rokje',
    'spiderman rugtas', 'mickey mouse oren', 'kerstverlichting', 'kerstballen', 'nintendo wii spel', 'roze stropdas',
    'een dobbelsteen met 20 zijden', 'rieten hoed', 'console controller', 'cactus plantje', 'frikandelbroodje', 'pannenkoekenpan',
    'donald duck stripboek', 'pokémon kaarten', 'eenhorn onesie'

];







// window.onload = alert('alert: zorg ervoor dat niemand je ziet');


function randomitemcalc() {
    let index = Math.floor(Math.random() * randomItem.length);
    let item = randomItem[index];

    document.getElementById('random-item').innerHTML = item;
}



window.onload = randomitemcalc;

console.log(randomItem.length);