// import express = require('express')
// const app = express()


// app.get('/', (req, res, next)=> {
//     res.send('Tour Booking API')
// })

// app.get('/tours', (req, res, next)=> {
//     res.send('Get list of tours')
// })

// app.post('/tours', (req, res, next)=> {
//     res.send('Add a new tour...')
// })

// console.log('test change')

// app.listen(process.env.PORT || 8091, () => console.log('Server runing...'))
import * as express from "express";
import log from "./log";

const app = express();

app.get("/", (req, res) => {
    res.json(JSON.stringify({ok: 1})).end();
});

app.listen(process.env.PORT || 5000, () => {
    log.info("app running");
});