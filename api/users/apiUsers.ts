import { Router } from 'express'
let  apiGetTourDetail = require ('./apiGetUserDetail')
let  apiAddUser = require ('./apiAddUser')
let  apiDeleteUser = require ('./apiDeleteUser')
let  apiUpdateUser = require ('./apiUpdateUser')

export let userRouter = Router()

userRouter.get('/:id', (req, res, next) => {
    res.send ("Data for User with id " + req.params.id)
})
// userRouter.post('/', apiAddUser)
// userRouter.delete('/:id', apiDeleteUser)
// userRouter.patch('/:id', apiUpdateUser)