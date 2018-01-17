const express = require('express');
const bodyParser = require('body-parser');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('test.');
});

app.post('/', (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log('Server up.');
});
