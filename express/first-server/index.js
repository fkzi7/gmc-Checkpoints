const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res, next) => {
  console.log(req.method, req.hostname, req.url),
    res.send(`
    <p>welcome to our website, you are in ${req.url}</p>
    <a href="/Home"> Descript</a>
    <a href="/Popular-cars"> Popular cars</a>
    <a href="fast-cars"> Fast cars</a>
    <a href="Trucks"> trucks</a>
    `);
});

const fastCars = ["ferrari", "lamborghini", "porsche"];
const popularCars = ["toyota", "honda", "ford"];
const trucks = ["ford", "chevy", "dodge"];



app.get("/Popular-cars", (req, res) => {
    res.send(`this is the popular cars page, this popular car is ${popularCars}`);
})

app.get("/Fast-cars", (req, res) => {
    res.send(`this is the fast cars page, this fast car is ${fastCars}`);
})

app.get("/Trucks", (req, res) => {
    res.send(`this is the trucks page, this truck is ${trucks}`);
})

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});

