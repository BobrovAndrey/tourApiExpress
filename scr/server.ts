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
import express from 'express';
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));