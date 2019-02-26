import { CustomRequestHandler } from '../../../model/express'
import { RequestHandler } from 'express-serve-static-core';
import { APIError } from '../../../model/shared/messages';

export const apiValidation: RequestHandler = (req,res,next) => {
    if(req.accepts('application/json')) {
        next()
    } else {
        next (new APIError('Content Type not supported', 'This API only supports application/json', 400))
    }
}