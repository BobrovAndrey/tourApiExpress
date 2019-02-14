import { DataStore } from '../../data/data'
import { RequestHandler } from 'express'

import uuidV4 from 'uuid/v4'
import { APIError, PublicInfo } from '../../model/shared/messages';


export const apiCreateTour: RequestHandler = (req, res, next) => {
  if (!req.body){
    next(new APIError('Data missing', 'No data in request body', 400))
  }
  const newTour = {
    id: uuidV4(),
    location: req.body.location || '',
    tourTitle: req.body.tourTitle || '',
    tourCategory: req.body.tourCategory || '',
    tourDescription: req.body.tourDescription || '',
    price: req.body.price || 0,
    currency: req.body.currency || '',
    img: []
  }
  DataStore.tours.push(newTour)
  res.json(new PublicInfo('Tour added', 200, {tour: newTour}))
}
