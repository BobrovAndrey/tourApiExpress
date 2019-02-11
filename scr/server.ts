import express from 'express';
const app = express()

import { DataStore } from '../data/data'
import { apiGetTours } from '../api/tours/apiGetTours';


console.log('Data is',DataStore.tours)
app.get('/', (req, res, next)=> {
     res.send('Tour Booking API')
 })

 app.get('/tours', apiGetTours)

 app.post('/tours', (req, res, next)=> {
     res.send('Add a new tour...')
 })

 app.listen(process.env.PORT || 8091, () => console.log('Server now runing...'))
