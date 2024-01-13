const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/app.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'app.js'));
});

app.get('/styles.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'src', 'styles.css'));
});

app.listen(port, () => {
    console.log(`running on port ${port}`);
})