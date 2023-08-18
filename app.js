const express = require("express");
const path = require("path");
const { fileURLToPath } = require("url");

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log(path.join(__dirname, 'views'))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

app.listen(3000);
console.log('Listening on port' + 3000);
