import express from 'express'
const app = express()

import bodyParser, { json } from 'body-parser'
const jsonParser = bodyParser.json()


//console.log(express)

import { DataStore } from '../data/data'
import { apiGetTours } from '../api/tours/apiGetTours'
import { apiGetTourDetail } from '../api/tours/apiGetToursDetail'
import { apiCreateTour } from '../api/tours/apiCreateTour'
import { apiDeleteTour } from '../api/tours/apiDeleteTour'
import { apiUpdateTour } from '../api/tours/apiUpdateTour'
import { apiUpdatePatchTour } from '../api/tours/apiUpdatePatchTour'

// console.log('Data is',DataStore.tours)
app.get('/', (req, res, next)=> {
     res.send('Tour Booking API')
 })

 app.get('/tours', apiGetTours)

 app.get('/tours/:id', apiGetTourDetail)

 app.post('/tours', jsonParser, apiCreateTour)

 app.delete('/tours/:id', apiDeleteTour )

 app.put('/tours/:id', jsonParser, apiUpdateTour)

 app.patch('/tours/:id', jsonParser, apiUpdatePatchTour)

 app.listen(process.env.PORT || 8092, () => console.log('Server now runing...3'))
