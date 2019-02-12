import express from 'express'
const app = express()

import bodyParser, { json } from 'body-parser'
const jsonParser = bodyParser.json()


//console.log(express)

import { DataStore } from '../data/data'
import { apiGetTours } from '../api/tours/apiGetTours';
import { apiGetTourDetail } from '../api/tours/apiGetToursDetail';
import { apiCreateTour } from '../api/tours/apiCreateTour'


// console.log('Data is',DataStore.tours)
app.get('/', (req, res, next)=> {
     res.send('Tour Booking API')
 })

 app.get('/tours', apiGetTours)

 app.get('/tours/:id', apiGetTourDetail)

 app.post('/tours', jsonParser, apiCreateTour)

 app.delete('/tours/:id', )

 app.listen(process.env.PORT || 8091, () => console.log('Server now runing...3'))
