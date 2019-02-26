import bodyParser, { json } from 'body-parser'
export const jsonParser = bodyParser.json()
export const urlEncodedParser = bodyParser.urlencoded({ extended: true })