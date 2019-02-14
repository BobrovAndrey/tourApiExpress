import express from 'express'
const app = express()

import bodyParser, { json } from 'body-parser'
const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencoded({ extended: true })

import { DataStore } from '../data/data'
import { apiGetTours } from '../api/tours/apiGetTours'
import { apiGetTourDetail } from '../api/tours/apiGetToursDetail'
import { apiCreateTour } from '../api/tours/apiCreateTour'
import { apiDeleteTour } from '../api/tours/apiDeleteTour'
import { apiUpdateTour } from '../api/tours/apiUpdateTour'
import { apiUpdatePatchTour } from '../api/tours/apiUpdatePatchTour'
import { CustomRequestHandler } from '../model/express';

import path from 'path'
import { __root } from '../config';
import { apiUploadImage } from '../api/tours/apiUploadImage';
import { APIError } from '../model/shared/messages';

import morgan from 'morgan'
const logger = morgan('dev')

app.use(logger)

app.use((req,res,next) => {
    if(req.accepts('application/json')) {
        next()
    } else {
        next (new APIError('Content Type not supported', 'This API only supports application/json', 400))
    }
})



app.use('/static', express.static(path.join(__dirname, 'public', 'img')))

// const authenticator: CustomRequestHandler = (req, res, next) => {
//     const username = 'Andrey'
//     req.user = username
//     next()
// }

// const logger: CustomRequestHandler = (req, res, next) => {
//     console.log('User: '+ req.user + ' - ' + new Date() + '-' + req.method +'Request path' + req.path)
//     next()
// }

// app.use(authenticator)
// app.use(logger)

app.get('/', (req, res, next)=> {
     res.send('Tour Booking API')
 })

 app.get('/tours', apiGetTours)

 app.get('/tours/:id', apiGetTourDetail)

 app.get('/booking/:id(\\d{4})', (req, res, next) => res.json(req.params))

 app.post('/headers', (req, res, next) => {
     res.json(req.headers)
 })

 app.post('/tours', jsonParser, apiCreateTour)

 app.post('/tours/:id/img', apiUploadImage)

 app.delete('/tours/:id', apiDeleteTour )

 app.put('/tours/:id', jsonParser, apiUpdateTour)

 app.patch('/tours/:id', jsonParser, apiUpdatePatchTour)

 app.listen(process.env.PORT || 8094, () => console.log('Server now runing...3'))
