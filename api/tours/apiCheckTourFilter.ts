import { RequestHandler } from 'express'

export const apiCheckTourFilter: RequestHandler = (req, res, next) => {
  console.log(req.query)
  next()
}