const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

function reverseString(stringToReverse) {
  return stringToReverse.split("").reverse().join("");
}

app.use(express.static(path.join(__dirname, ".\\")));
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}));

app.post('/form', function(req, res) {
  console.log('Received data from page:\n' + JSON.stringify(req.body));
  let response = JSON.parse('{"reversedFirst": "' + reverseString(req.body.firstName) + '", "reversedLast": "' + reverseString(req.body.lastName) + '"}');
  res.json(response);
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});