const express = require('express');
const routes = require('../routes');
const path = require("path");
const home = path.join(__dirname, "../client", "index.html");
const objDiscos = require("../discos.json");

// Crear una app de express
const app = express();

app.use(express.static(path.join(__dirname , "../client")));

app.get("/", (req, res) => {
    res.sendFile(home);
});

app.use('/', routes());


app.listen(3000);