import { RequestHandler } from 'express'

export const apiUpdateUser: RequestHandler = (req, res, next) => {
    res.send ("Data for User with id " + req.params.id)
}