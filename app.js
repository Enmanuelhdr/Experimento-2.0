import express from "express";
import { dirname, join } from 'path';
import { fileURLToPath } from "url";\
import ejs from 'ejs';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(join(__dirname, 'views'))
const currentUrl = window.location.href;
console.log(currentUrl);

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

app.listen(3000);
console.log('Listening on port' + 3000);
