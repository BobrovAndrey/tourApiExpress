import { Router } from 'express'
import { logger } from './general/logging';
import { apiValidation } from './general/validation';
import { userRouter } from './users/apiUsers';
import { toursRouter } from './tours/apiTours';
import { apiCors } from './general/cors';
import express = require('express');
import { apiErrorHandler } from './general/errorHandling';
import { __root } from '../../config'
const path = require('path')

export const routerV1 = Router()

routerV1.use(logger)

routerV1.use(apiValidation)

routerV1.use('/users', userRouter)
routerV1.use('/tours', toursRouter)

routerV1.use (apiCors)



routerV1.use('/static', express.static(path.join(__root, 'public', 'img')))

routerV1.use(apiErrorHandler)