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

// arg für Argument --> richtet sich nach Wert den man eingibt an der Stelle in der eckigen Klammer

if (args.length < 3) {
  console.log();
} else {
  amount = args[0];
  originalCurrency = args[1];
  targetCurrency = args[2];
}

// Variablen definieren Umrechnungsfaktor
let currencies = {USD: 1.11, GBP: 0.85, EUR: 1, SEK: 10.65, RUB: 70.55, CHF: 1.10, TRY: 6.33, JPY:120.39, NZD: 1.75}

//console.log(currencies.USD)

console.log(((1/currencies[originalCurrency]) * currencies[targetCurrency])*amount)



//TODO: Code schreiben, dass er ausgeführt wird; Vorgehen: Comment-Coding
//TODO: je nachdem können wir auch coden: arrays, objekte, schleifen usw benutzen