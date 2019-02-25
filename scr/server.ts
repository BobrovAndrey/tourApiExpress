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
import { idFormat } from '../config'

import morgan from 'morgan'
import { dateParam } from '../api/general/reqParams/dateParam';
import { apiCheckTourFilter } from '../api/tours/apiCheckTourFilter';
import { apiErrorHandler } from '../api/general/errorHandling';
import { apiDownloadImage } from '../api/tours/apiDownloadImage';
import { userRouter } from '../api/users/apiUsers';
const logger = morgan('dev')

app.use(logger)

app.use((req,res,next) => {
    if(req.accepts('application/json')) {
        next()
    } else {
        next (new APIError('Content Type not supported', 'This API only supports application/json', 400))
    }
})

app.use('/users', userRouter)

app.use ((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': 'GET, POST, PUT, DELETE'
    })
    next()
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

app.use(apiErrorHandler)

app.get('/', (req, res, next)=> {
     res.send('Tour Booking API')
 })

 app.get('/tours', apiCheckTourFilter,  apiGetTours)

 app.get('/tours/:id', apiGetTourDetail)

 app.param ('formDate', dateParam )

 app.get(`/booking/:id(${idFormat})`, (req, res, next) => res.json(req.params))

 app.post('/headers', (req, res, next) => {
     res.json(req.headers)
 })

 app.post('/tours', jsonParser, apiCreateTour)

 app.post('/tours/:id/img', apiUploadImage)

 app.delete('/tours/:id', apiDeleteTour )

 app.put('/tours/:id', jsonParser, apiUpdateTour)

 app.patch('/tours/:id', jsonParser, apiUpdatePatchTour)

 app.get('/static/download/:filename', apiDownloadImage)

 app.listen(process.env.PORT || 8095, () => console.log('Server now runing...3'))
