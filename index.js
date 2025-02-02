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
let currencies = {
  USD: {
    value: 1.11,
    symbol: ' $'
  },
  GBP: {
    value: 0.85,
    symbol: ' £'
  },
  EUR: {
    value: 1,
    symbol: ' €'
  },
  SEK: {
    value: 10.65,
    symbol: ' SEK'
  },
  RUB: {
    value: 70.55,
    symbol: ' руб'
  },
  CHF: {
    value: 1.10,
    symbol: ' CHF'
  },
  TRY: {
    value: 6.33,
    symbol: ' TL₺'
  },
  JPY: {
    value: 120.39,
    symbol: ' ¥'
  },
  NZD: {
    value: 1.75,
    symbol: ' NZ$'
  }
}

/*
  values: {USD: 1.11, GBP: 0.85, EUR: 1, SEK: 10.65, RUB: 70.55, CHF: 1.10, TRY: 6.33, JPY: 120.39, NZD: 1.75},
  symbols: {USD: '$', GBP: '£', EUR: '€', SEK: 'SEK', RUB: 'руб', CHF: 'CHF', TRY: 'TL₺', JPY: '¥', NZD: 'NZ$'}
}
*/
//console.log(currencies.USD)

//console.log(((1 / currencies[originalCurrency]) * currencies[targetCurrency]) * amount)

let output = (((1 / currencies[originalCurrency].value) * currencies[targetCurrency].value) * amount)

//let outputSymbol = 

console.log(amount + ' ' + args[1] + ' sind ' + output + currencies[targetCurrency].symbol)



const request = require('request');

request('https://api.exchangeratesapi.io/latest', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  let bodyObj = JSON.parse(body);
  //console.log(bodyObj);
  for (let field in bodyObj.rates) {
    //console.log(field)
    //console.log(bodyObj.rates[field])  
    if (currencies.hasOwnProperty(field) === true) {
      currencies[field].value = bodyObj.rates[field];
    } else if (currencies.hasOwnProperty(field) === false) {
      currencies[field] = {};
      currencies[field].value = bodyObj.rates[field];
    }

    console.log(field);
    console.log(bodyObj.rates[field]);

  }
});