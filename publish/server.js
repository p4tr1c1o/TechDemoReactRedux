var express = require('express');
const path = require('path');

var app = express();
var port = process.env.PORT || process.argv[2] || 80;

// app.use(express.static("www"));
app.use(express.static(path.join(__dirname, 'www')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

app.listen(port);