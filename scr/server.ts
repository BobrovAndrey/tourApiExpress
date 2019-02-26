import express from 'express'
const app = express()
import { routerV1 } from '../api/v1/v1';

app.use('/v1', routerV1)

 const port = process.env.PORT || 8095

 app.listen(port, () => console.log('Server now runing...3', port))
