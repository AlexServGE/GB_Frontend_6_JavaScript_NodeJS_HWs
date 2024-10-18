const express = require(`express`);
const counter = require(`./counter`);
const path = require(`path`);

const app = express();

const counterfilePath = "./counter.txt";

app.get(`/`, (req, res) => {
    counter.counterToFile(counterfilePath);
    res.sendFile(path.join(__dirname, "static/index.html"));
})

app.get(`/about`, (req, res) => {
    counter.counterToFile(counterfilePath);
    res.sendFile(path.join(__dirname, "static/about.html"));
})

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})


