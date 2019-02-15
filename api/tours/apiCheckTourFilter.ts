import { RequestHandler } from 'express'
import { TourFilters } from '../../model/shared/tourFilter';

export const apiCheckTourFilter: RequestHandler = (req, res, next) => {
  const filters = new TourFilters(req.query)
  for (let filter of Object.getOwnPropertyNames(req.query)){
    if(!filters.hasOwnProperty(filter)) {
      res.send({'error, no such filter':'400'})
    }
  }
  console.log(filters)
  next()
}