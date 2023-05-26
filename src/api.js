var express = require("express");
var app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const router = express.Router();
app.use('/', router.get('/', (req, res) => {
    res.status(200).send("<h1>Api</h1>");
}));

app.use('/', router.get('/sobre', (req, res, next) => {
    res.status(200).send({
        "nome":"API - CHAT",
        "versao":"0.1",
        "autor":"Augusto Jung"
    });
}));

module.exports = app;
