const readline = require('readline');
var request = require('request');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Search for something? ', (answer) => {

    var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+answer+'&limit=10&namespace=0&format=json';

    request.post(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(JSON.parse(response.body)[1]);
    }
})

  
  rl.close();
});