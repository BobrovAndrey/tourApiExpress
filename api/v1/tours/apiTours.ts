import { Router } from 'express'
import { jsonParser } from '../general/bodyParser';
import { apiCreateTour } from './apiCreateTour';
import { apiUploadImage } from './apiUploadImage';
import { apiDeleteTour } from './apiDeleteTour';
import { apiUpdateTour } from './apiUpdateTour';
import { apiUpdatePatchTour } from './apiUpdatePatchTour';
import { apiGetTours } from './apiGetTours';
import { apiCheckTourFilter } from './apiCheckTourFilter';
import { apiGetTourDetail } from './apiGetToursDetail';
export let toursRouter = Router()


toursRouter.route('/')
    .get(apiCheckTourFilter, apiGetTours)
    .post(jsonParser, apiCreateTour)

toursRouter.route('/:id')
     .delete(apiDeleteTour )
     .put(jsonParser, apiUpdateTour)
     .patch(jsonParser, apiUpdatePatchTour)
     .get( apiGetTourDetail)

// toursRouter.post('/', jsonParser, apiCreateTour)
toursRouter.post('/:id/img', apiUploadImage)

// toursRouter.delete('/:id', apiDeleteTour )

// toursRouter.put('/:id', jsonParser, apiUpdateTour)

// toursRouter.patch('/:id', jsonParser, apiUpdatePatchTour)

// toursRouter.get('/', apiCheckTourFilter,  apiGetTours)

// toursRouter.get('/:id', apiGetTourDetail)
 
