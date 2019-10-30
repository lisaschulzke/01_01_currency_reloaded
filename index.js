/*
 * CURRENCY CONVERTER RELOADED
 * Author: <your name here>
 * ---------------------------
 *
 * This converts currencies...somehow.
 *
 * A list of ressources you used, for example links:
 * [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).
 */

/*
 *  Aufgabe: Baut einen neuen Währungsumrechner. Nachfolgend findet ihr Code der die 
 *  dafür notwendingen Eingabewerte von der Konsole entgegennimmt.
 * 
 *  Dafür müsst ihr das Script wie folgt aufrufen:
 *  npm start -- <Ausgangssumme> <Ausgangswährung-Code> <Zielwährung-Code>
 *  also z.B.
 *  npm start -- 10.0 USD EUR
 * 
 *  Die erwartete Ausgabe ist ein Text in folgender Form:
 *  'Ergebnis: <Ausgangssumme> <Ausgangswährung> = <Ergebnis> <Zielwährung>'
 *  also z.B.
 *  Ergebnis: 10.00 USD = 11.00 EUR
 *  
 *  Das Script soll mindestens drei verschiedene Währungen in beide Richtungen unterstützen
 */

let args = process.argv.slice(2);

let amount, originalCurrency, targetCurrency;

if (args.length < 3) {
  console.log();
} else {
  amount = args[0];
  originalCurrency = args[1];
  targetCurrency = args[2];
}

// Variablen definieren Umrechnungsfaktor
const EUR = 1
const USD = 1.11
let calculation;

if (originalCurrency === 'USD' && targetCurrency === 'EUR') {
  calculation = amount * USD * EUR
  console.log(amount + ' ist in USD ' + calculation)
} else if (originalCurrency === 'EUR' && targetCurrency === 'USD') {
  calculation = amount / USD * EUR
  console.log(amount + ' ist in EUR ' + calculation)
}

//TODO: Code schreiben, dass er ausgeführt wird; Vorgehen: Comment-Coding
//TODO: je nachdem können wir auch coden: arrays, objekte, schleifen usw benutzen