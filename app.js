const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.sendFile("index.html", {
    "root": "./"
  });
});

app.post('/form', function(req, res) {
  res.json(req.body);
});

app.listen(3000, function() {
  console.log('Example App listening on port 3000');
});