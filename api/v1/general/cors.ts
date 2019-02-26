import { RequestHandler } from 'express'

export const apiCors: RequestHandler = (req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': 'GET, POST, PUT, DELETE'
    })
    next()
}