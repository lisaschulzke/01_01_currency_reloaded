const request = require('request');

request('https://api.exchangeratesapi.io/latest', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  let bodyObj = JSON.parse(body);
  console.log(bodyObj);
  for (let field in bodyObj.rates) {
    console.log(field)
  }
});

