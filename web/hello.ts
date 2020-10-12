import express from 'express'
//import express = require('express');
//var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/data/', function (req, res) {
  const results = [
    { id: 5, name: "joe" },
    { id: 42, name: "jill" }
  ];
  res.send(results);
});

app.get('/data/42', function (req, res) {
  const result = { id: 42, name: "jill" };
  res.send(result);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});