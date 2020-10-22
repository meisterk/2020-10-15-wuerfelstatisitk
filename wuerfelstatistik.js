// Daten
let einser = 0;
let zweier = 0;
let dreier = 0;
let vierer = 0;
let fuenfer = 0;
let sechser = 0;

// 6000mal wuerfeln und mitzaehlen
for (let zaehler = 0; zaehler < 6000; zaehler++) {
    const wuerfel = Math.floor(Math.random() * 6) + 1;
    switch (wuerfel) {
        case 1:
            einser++;
            break;
        case 2:
            zweier++;
            break;
        case 3:
            dreier++;
            break;
        case 4:
            vierer++;
            break;
        case 5:
            fuenfer++;
            break;
        case 6:
            sechser++;
    }
}

// Ausgabe
console.log('1er: ' + einser);
console.log('2er: ' + zweier);
console.log('3er: ' + dreier);
console.log('4er: ' + vierer);
console.log('5er: ' + fuenfer);
console.log('6er: ' + sechser);