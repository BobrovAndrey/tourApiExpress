import express from 'express'
const app = express()

import bodyParser from 'body-parser'
const jsonParser = bodyParser.json()


console.log(express)

import { DataStore } from '../data/data'
import { apiGetTours } from '../api/tours/apiGetTours';
import { apiGetTourDetail } from '../api/tours/apiGetToursDetail';


// console.log('Data is',DataStore.tours)
app.get('/', (req, res, next)=> {
     res.send('Tour Booking API')
 })

 app.get('/tours', apiGetTours)

 app.get('/tours/:id', apiGetTourDetail)

 app.post('/tours', )

 app.post('/tours', (req, res, next)=> {
     res.send('Post a new tour...')
 })

 app.listen(process.env.PORT || 8092, () => console.log('Server now runing...3'))
