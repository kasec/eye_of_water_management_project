const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// API REST
app.get("/api/users", (req, res) => {
    res.json({
        clients: [
            { name: "Azael" },
            { name: "Joel" },
            { name: "PEdro" },
            { name: "Ramiro" },
            { name: "Joaquin" },
            { name: "JEsus" },
        ],
    });
});
app.get("/api/clients", (req, res) => {
    res.json({
        clients: [
            { name: "Azael" },
            { name: "Joel" },
            { name: "PEdro" },
            { name: "Ramiro" },
            { name: "Joaquin" },
            { name: "JEsus" },
        ],
    });
});

app.listen(port, () => {
    console.log(`API -- listening on port ${port}`);
});